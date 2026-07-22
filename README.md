# Patent & Literature Search MCP

Search 200M+ patents and scientific literature in natural language,
directly inside Claude, Cursor, or any MCP-compatible AI tool.
Powered by PatSnap's proprietary R&D intelligence database.

## About PatSnap

PatSnap is a global innovation intelligence platform covering 200M+
patents across 170+ jurisdictions (USPTO, EPO, WIPO and more), 216M+
scientific papers, and R&D data.

To explore PatSnap data interactively, try
[Eureka](https://eureka.patsnap.com), PatSnap's AI-native R&D
assistant. To access data programmatically, use the MCP servers or
REST API via [PatSnap Open Platform](https://open.patsnap.com).

## What It Does

Patent & Literature Search MCP gives your AI agent direct access to
PatSnap's patent and academic literature databases — searchable
together in a single query, in natural language, without switching
tools or learning Boolean syntax.

- **Patent search** — keyword, assignee, inventor, IPC class, legal
  status, date range, and citation filters
- **Literature search** — semantic and keyword search across
  peer-reviewed scientific papers
- **Fusion search** — patents and papers returned together in one
  query, with structured output ready for AI reasoning
- **Natural language input** — describe your problem or topic in
  plain English or Chinese; the MCP constructs the search strategy
- **Precision filtering** — filter by assignee, inventor, legal
  status, jurisdiction, date range, and citation count simultaneously

## Tools

### `patsnap_search`

Search patents, scientific literature, or both in a single request.
Supports natural-language and semantic queries, precise keyword and
BM25-based text search, and filters such as assignee, inventor, IPC
classification, legal status, jurisdiction, date range, and citations.

### `patsnap_fetch`

Retrieve a patent or literature record as Markdown using a result URL.
Patent records can also be fetched by publication number and may include
bibliographic data, claims, descriptions, and drawings. Literature records
include core bibliographic and abstract metadata.

## Quick Start

### 1. Get your API key

Register at [PatSnap Open Platform](https://open.patsnap.com) and
generate a free API key from the
[Patent & Literature Search MCP page](https://open.patsnap.com/marketplace/mcp-servers/patsnap-search).
New accounts include 10,000 free credits. No credit card required.

### 2. Add to Claude Code

```bash
claude mcp add --transport http search-tool \
  "https://connect.patsnap.com/2b0355/logic-mcp?apikey=YOUR_API_KEY"
```

Restart Claude Code and type `/mcp` to confirm it loaded.

### 3. Add to Cursor or Windsurf

Add the following to your MCP configuration file:

```json
{
  "mcpServers": {
    "patsnap_patent_literature": {
      "url": "https://connect.patsnap.com/2b0355/logic-mcp?apikey=YOUR_API_KEY",
      "type": "streamableHttp"
    }
  }
}
```

Replace `YOUR_API_KEY` with your key from PatSnap Open Platform.

## Example Prompts

```
What is Tesla actually working on in battery technology — show me
their recent patent filings, group by technology area, and identify
who is leading each.
```

```
Which GLP-1 receptor agonist patents are expiring before 2028,
and what does recent literature say about next-generation mechanisms?
```

```
My EV battery loses 40% range in cold weather. What technical
solutions exist in patents and academic papers?
```

## Resources

- [PatSnap](https://www.patsnap.com)
- [PatSnap Open Platform](https://open.patsnap.com)
- [Patent & Literature Search MCP](https://open.patsnap.com/marketplace/mcp-servers/patsnap-search)
- [Eureka](https://eureka.patsnap.com)
- [All PatSnap MCP Servers](https://github.com/patsnap/mcp-for-patent-literature)

## License

Apache-2.0

---

Powered by [PatSnap](https://www.patsnap.com). Innovate with Confidence.
