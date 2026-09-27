"use client";

import dynamic from "next/dynamic";
import { Typography, Container } from "@mui/material";

const Table = dynamic(
  () => import("./Table/Table"),
  { ssr: false }
);

function CryptoPricesTable() {
    return (
        <Container className="relative z-10">
            <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
                    Why choose us
                </span>

                <Typography
                    variant="h2"
                    component="h3"
                    sx={{
                        fontSize: { xs: "2.8rem", sm: "3.5rem", md: "5rem" },
                        lineHeight: 1.1
                    }}
                    className="font-black text-white !mb-10 uppercase tracking-wider"
                >
                    Today&rsquo;s{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Crypto Prices
                    </span>
                </Typography>
            </div>

            <Table />
        </Container>
    );
}

export default CryptoPricesTable;