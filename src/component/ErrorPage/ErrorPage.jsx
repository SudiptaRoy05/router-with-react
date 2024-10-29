import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
  return (
    <div style={{
        'margin-left':'50px',

    }}>
        <h3>Oops</h3>
        <h4>{error.statusText || error.message}</h4>
    </div>
  )
}
