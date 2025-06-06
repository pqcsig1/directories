"use client";

type ServerConfigWithArgs = {
  command: string;
  args: string[];
};

type ServerConfigWithType = {
  type: string;
  command: string;
};

type ServerConfig = ServerConfigWithArgs | ServerConfigWithType;

type Props = {
  name: string;
  config:
    | Record<string, ServerConfig>
    | { mcpServers: Record<string, ServerConfig> };
};

export function CursorDeepLink({ name, config }: Props) {
  console.log(config);

  // Check if config has mcpServers key, otherwise use direct format
  const servers = "mcpServers" in config ? config.mcpServers : config;

  // Get the first server configuration from the servers object
  const serverConfig = Object.values(servers)[0];

  // Flatten the command and args into a single command string
  const flattenedConfig = {
    command:
      "args" in serverConfig
        ? `${serverConfig.command} ${serverConfig.args.join(" ")}`
        : serverConfig.command,
  };

  return (
    <a
      href={`cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(name)}&config=${btoa(
        JSON.stringify(flattenedConfig),
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cursor.com/deeplink/mcp-install-light.svg"
        alt="Add  MCP server to Cursor"
        height="32"
      />
    </a>
  );
}
