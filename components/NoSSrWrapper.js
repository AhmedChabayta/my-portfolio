/* eslint-disable react/jsx-no-useless-fragment */
import dynamic from "next/dynamic";

function NonSSRWrapper({ children }) {
  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
