This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Accessing the Project on Another Device

To access this project on another device, you'll need to expose your local development server to your network:

### Option 1: Run on Network (Recommended for Local Network)

1. First, find your machine's local IP address:
2.    - **Windows**: Open Command Prompt and run `ipconfig`. Look for IPv4 Address (usually starts with 192.168 or 10.)
      -    - **Mac/Linux**: Open Terminal and run `hostname -I` or `ifconfig`. Look for inet address
       
           - 2. Modify the Next.js dev script in `package.json` or run with hostname flag:
             3.    ```bash
                      npm run dev -- -H 0.0.0.0 -p 3000
                      ```

                   3. From another device on the same network, open your browser and navigate to:
                   4.    ```
                            http://<YOUR_LOCAL_IP>:3000
                            ```
                            Replace `<YOUR_LOCAL_IP>` with your machine's local IP address from step 1.

                     ### Option 2: Use Tunnel/Port Forwarding (For Remote Access)

               For accessing the project from outside your local network, you can use tools like:

             - **ngrok**: `npx ngrok http 3000` - Creates a public URL tunnel
             - - **Cloudflare Tunnel**: Set up a persistent tunnel to your localhost
               - - **Vercel CLI**: Deploy directly with `vercel dev`
                
                 - For detailed instructions, visit the [ngrok documentation](https://ngrok.com/docs) or [Cloudflare Tunnel guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-applications/).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
