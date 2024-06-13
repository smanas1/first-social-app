export default function (name: string, token: string) {
  return ` <div
      style="
        border: 1px solid black;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-top: 20px;
        padding-bottom: 20px;
      "
    >
      <h1>Hello ${name}</h1>
      <p>Please Verify Your Email</p>
      <a
        href="${process.env.BASE_URL}/activate/${token}"
        style="
        margin-top: 10px;
          text-decoration: none;
          border: 1px solid #333;
          color: #333;
          padding: 5px 10px;
          border-radius: 3px;
        "
        >Email Verify</a
      >
    </div>`;
}
