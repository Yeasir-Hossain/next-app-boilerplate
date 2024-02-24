import { asiaSportBackendUrl } from "./getAxios";

const refreshAccessToken = async (url: string, token: any) => {
  try {
    const { data } = await asiaSportBackendUrl.get(url, {
      headers: {
        Authorization: `Refresh ${token.refreshToken}`
      }
    });

    if (data?.status) {
      return {
        ...token,
        accessToken: data?.data?.accessToken,
        refreshToken: data?.data?.refreshToken,
        expiresIn: data?.data?.expiresIn
      };
    }
  } catch (error) {
    console.error("Something went wrong on refreshToken!");
  }
};

export default async function getAccessToken(token: any, role: string) {
  const apiUrl = role === "admin" ? "/api/admin/refresh-token" : "/api/user/refresh-token";
  return await refreshAccessToken(apiUrl, token);
}
