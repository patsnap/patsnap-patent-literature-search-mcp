# PatSnap Patent & Literature Search

> by [PatSnap](https://www.patsnap.com)

## Product Definition

PatSnap Patent & Literature Search MCP is a Model Context Protocol server that enables AI agents to search PatSnap's global patent and scientific literature databases together. It supports natural-language and semantic queries, precise keyword and BM25-based text search, and multidimensional filters for efficient retrieval of patent and academic intelligence. It can also fetch patent or literature records as Markdown.

## Quick Links

- [PatSnap](https://www.patsnap.com)
- [PatSnap Open Platform](https://open.patsnap.com)
- [Patent & Literature Search MCP](https://open.patsnap.com/marketplace/mcp-servers/patsnap-search)

## Version

`v1.0.0` (Beta)

## Supported Tools

### `patsnap_search`

Search patents and academic papers with natural-language queries, semantic search, precise keyword matching, BM25-based text search, and filters such as assignee, IPC classification, date, and jurisdiction.

### `patsnap_fetch`

Fetch patent or literature content in Markdown from a record URL. Patent records can also be fetched by publication number and may include bibliographic details, claims, descriptions, and drawings. Literature records provide basic abstract metadata.

## Installation

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

Replace `YOUR_API_KEY` with an API key from [PatSnap Open Platform](https://open.patsnap.com).

## Usage Examples

- Find recent patents and academic papers about solid-state battery electrolytes.
- Search for patents by an assignee within a jurisdiction, IPC classification, and publication date range.
- Retrieve the Markdown content of a patent by publication number.
- Fetch the abstract metadata for a literature result returned by `patsnap_search`.

## Related Links

- Official MCP page: [https://open.patsnap.com/marketplace/mcp-servers/patsnap-search](https://open.patsnap.com/marketplace/mcp-servers/patsnap-search)
- MCP Quick Start: [https://open.patsnap.com/devportal/guides/mcp-quickstart](https://open.patsnap.com/devportal/guides/mcp-quickstart)
- Source repository: [https://github.com/patsnap/patent-literature-search](https://github.com/patsnap/patent-literature-search)

## License

Apache License 2.0 (see [LICENSE](./LICENSE))

---

Powered by [PatSnap](https://www.patsnap.com). Innovate with Confidence.
