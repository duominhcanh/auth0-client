import { useAuth0 } from "@auth0/auth0-react";
import { ActionIcon, CopyButton, Paper, Text, Tooltip } from "@mantine/core";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

export const AccessToken = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      }
    };
    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Paper p="md" withBorder>
      <div className="mb-2 flex flex-row justify-between">
        <Text fw={600}>Access Token</Text>
        <CopyButton value={token}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Copied" : "Copy"} position="left">
              <ActionIcon
                variant="subtle"
                onClick={copy}
                className="float-right"
                size="lg"
              >
                <Copy size={16} />
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </div>
      <Text className="break-all">{token}</Text>
    </Paper>
  );
};
