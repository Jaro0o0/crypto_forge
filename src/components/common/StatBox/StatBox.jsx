'use client';

import { Box, Typography } from "@mui/material";

function StatBox({ coin, label }) {




  return (


    <Box className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6">

      {/* IMG */}
      <div className=" flex items-center gap-2 mb-1">
        {coin?.image && <img src={coin.image} alt={label} className="  animate-float w-8 h-8 md:w-10 md:h-10 rounded-full" />}
        <Typography className=" text-gray-400 text-base md:text-lg uppercase tracking-wider">{label}</Typography>
      </div>


      {/* PRICE */}
      <Typography className="text-white text-lg md:text-2xl xl:text-4xl font-bold ">
        ${coin?.current_price?.toLocaleString() ?? "—"}
      </Typography>


      {/* CHANGE */}
      {coin?.price_change_percentage_24h != null && (
        <Typography
          className={`text-sm md:text-base font-semibold  ${
            coin.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {coin.price_change_percentage_24h > 0 ? "+" : ""}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Typography>
      )}
    </Box>
  );
}

export default StatBox;
