---
name: patsnap-patent-literature-search
description: Search PatSnap's global patent and scientific literature databases together using natural-language, semantic, keyword, and BM25-based queries with multidimensional filters, then fetch patent or literature records as Markdown.
homepage: https://open.patsnap.com/marketplace/mcp-servers/patsnap-search
metadata:
  author: PatSnap
  category: "RD Innovation"
  version: 1.0.0
  requires:
    mcp_endpoint: "https://connect.patsnap.com/2b0355/logic-mcp?apikey=YOUR_API_KEY"
---

## Setup

Get your API key at [PatSnap Open Platform](https://open.patsnap.com).

# PatSnap Patent & Literature Search

This skill connects an AI agent to the **PatSnap Patent & Literature Search MCP server**. The server searches PatSnap's patent and literature databases through two tools: `patsnap_search` and `patsnap_fetch`.

## Prerequisites

Configure the MCP server in your client:

```json
{
  "mcpServers": {
    "patsnap_patent_literature_search": {
      "url": "https://connect.patsnap.com/2b0355/logic-mcp?apikey=YOUR_API_KEY",
      "type": "streamableHttp"
    }
  }
}
```

Replace `YOUR_API_KEY` with your PatSnap Open Platform API key.

## Tool Selection

### Use `patsnap_search` for discovery

Use it when the user needs to find patents, academic papers, or both. Translate the request into the most suitable combination of:

- natural-language or semantic concepts;
- precise keywords or BM25-based text search;
- assignee, IPC classification, date, or jurisdiction filters when specified.

Preserve the identifiers and URLs returned by the search so records can be fetched and cited reliably.

### Use `patsnap_fetch` for record retrieval

Use it after discovery when the user needs the Markdown content of a selected record. Supply a returned record URL, or a publication number for a patent. Patent output may include bibliographic data, claims, descriptions, and drawings; literature output provides basic abstract metadata.

## Recommended Workflow

1. Determine whether the request targets patents, literature, or both.
2. Extract concepts, keywords, assignees, classifications, dates, and jurisdictions from the request.
3. Call `patsnap_search` with only the filters supported by the server's current tool schema.
4. Review the results and use `patsnap_fetch` for the records needed to answer the question.
5. Summarize the evidence and cite returned titles, publication numbers, record identifiers, or URLs.

## Example Workflows

- Search patents and papers about solid-state battery electrolytes, then compare the main technical approaches.
- Find patents from a named assignee in a target jurisdiction and date range, then fetch the most relevant patent records.
- Search academic literature for a research topic, then fetch abstract metadata for the strongest results.
- Fetch a patent directly by publication number and summarize its bibliographic data and claims.

## Resources

- **MCP Server**: [https://open.patsnap.com/marketplace/mcp-servers/patsnap-search](https://open.patsnap.com/marketplace/mcp-servers/patsnap-search)
- **MCP Quick Start**: [https://open.patsnap.com/devportal/guides/mcp-quickstart](https://open.patsnap.com/devportal/guides/mcp-quickstart)
- **PatSnap Open Platform**: [https://open.patsnap.com](https://open.patsnap.com)
