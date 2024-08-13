import axios, { AxiosRequestConfig } from "axios";

function formAxiosError(url: string, error: any, options?: any) {
  let e = new Error((error as any)?.message);
  const axiosError =
    (error as any)?.response?.data?.message ||
    (error as any)?.response?.data?.error ||
    (error as any)?.response?.statusText ||
    (error as any)?.response?.data;
  (e as any).url = url;
  Object.keys(options || {}).forEach((key) => ((e as any)[key] = options[key]));
  if (axiosError) (e as any).axiosError = axiosError;
  delete (e as any).stack;
  return e;
}

const successCodes: number[] = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
];
export async function httpGet(
  url: string,
  options?: AxiosRequestConfig,
  { withMetadata = false } = {}
) {
  try {
    const res = await axios.get(url, options);
    if (!successCodes.includes(res.status))
      throw new Error(`Error fetching ${url}: ${res.status} ${res.statusText}`);
    if (!res.data) throw new Error(`Error fetching ${url}: no data`);
    if (withMetadata) return res;
    return res.data;
  } catch (error) {
    throw formAxiosError(url, error, { method: "GET" });
  }
}
