import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { RangeRequestsPlugin } from "workbox-range-requests";

registerRoute(
  ({ url }) => url.pathname.endsWith(".mp4"),
  new CacheFirst({
    plugins: [new RangeRequestsPlugin()],
  })
);
