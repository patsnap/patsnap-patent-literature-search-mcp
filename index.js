import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const apiKey = process.env.PATSNAP_API_KEY;
const remoteUrl = new URL("https://connect.patsnap.com/2b0355/logic-mcp");
if (apiKey) remoteUrl.searchParams.set("apikey", apiKey);

let remoteClient;

async function getRemoteClient() {
  if (!apiKey) throw new Error("PATSNAP_API_KEY is required to call PatSnap search tools.");

  if (!remoteClient) {
    remoteClient = new Client(
      { name: "patsnap-patent-literature-search-bridge", version: "1.0.0" },
      { capabilities: {} },
    );
    await remoteClient.connect(new StreamableHTTPClientTransport(remoteUrl));
  }

  return remoteClient;
}

async function callRemoteTool(name, args) {
  return (await getRemoteClient()).callTool({ name, arguments: args });
}

function toToolResult(result) {
  return { content: result.content, ...(result.isError ? { isError: true } : {}) };
}

const server = new McpServer({
  name: "patsnap-patent-literature-search",
  version: "1.0.0",
});

server.registerTool(
  "patsnap_search",
  {
    title: "Search PatSnap patents and scientific literature",
    description: "Search PatSnap's patent and academic-literature databases using natural language or structured filters.",
    inputSchema: {
      query: z.string().describe("Natural-language or keyword search query."),
      search_type: z.enum(["patent", "literature", "both"]).optional().describe("Corpus to search."),
      filters: z.record(z.unknown()).optional().describe("Optional provider-supported search filters."),
    },
  },
  async (args) => toToolResult(await callRemoteTool("patsnap_search", args)),
);

server.registerTool(
  "patsnap_fetch",
  {
    title: "Fetch a PatSnap patent or literature record",
    description: "Retrieve a patent or scientific-literature record from a PatSnap result URL or patent publication number.",
    inputSchema: {
      url: z.string().url().optional().describe("PatSnap result URL to retrieve."),
      publication_number: z.string().optional().describe("Patent publication number."),
    },
  },
  async (args) => toToolResult(await callRemoteTool("patsnap_fetch", args)),
);

await server.connect(new StdioServerTransport());
