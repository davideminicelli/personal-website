"use client";

import { useState } from "react";

export const CardsForm = () => {
  const [cardName, setCardName] = useState("");
  const [rarity, setRarity] = useState("Rare");
  const [foil, setFoil] = useState(false);

  return (
    <main>
      <section className=" bg-primary pt-10">
        <div className="mx-auto w-full max-w-[700px]">
          {/* card name */}
          <div className="input-group">
            <label htmlFor="card-name">Card Name</label>
            <input
              id="card-name"
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          {/* set foil either false or true */}
          <div className="input-group">
            <div className="flex gap-4">
              <input
                id="foil-input"
                type="checkbox"
                className="h-10 w-10"
                checked={foil}
                onChange={(e) => setFoil(e.target.checked)}
              />
              <label htmlFor="foil-input">Foil</label>
            </div>
          </div>
          {/* set rarity, options: Common, Uncommon, Rare, Mythic Rare, radio buttons */}
          <div className="input-group">
            <label>Rarity</label>
            <div className="flex flex-col">
              <label className="flex gap-4">
                <input
                  type="radio"
                  name="rarity"
                  value="Common"
                  className="h-10 w-10"
                  checked={rarity === "Common"}
                  onChange={() => setRarity("Common")}
                />
                Common
              </label>
              <label className="flex gap-4">
                <input
                  type="radio"
                  name="rarity"
                  value="Uncommon"
                  className="h-10 w-10"
                  checked={rarity === "Uncommon"}
                  onChange={() => setRarity("Uncommon")}
                />
                Uncommon
              </label>
              <label className="flex gap-4">
                <input
                  type="radio"
                  name="rarity"
                  value="Rare"
                  className="h-10 w-10"
                  checked={rarity === "Rare"}
                  onChange={() => setRarity("Rare")}
                />
                Rare
              </label>
              <label className="flex gap-4">
                <input
                  type="radio"
                  name="rarity"
                  className="h-10 w-10"
                  value="Mythic Rare"
                  checked={rarity === "Mythic Rare"}
                  onChange={() => setRarity("Mythic Rare")}
                />
                Mythic Rare
              </label>
            </div>
          </div>
          {/* result */}
          <div>
            <div className="result">
              <h2 className="mb-2 mt-8 font-heading text-2xl font-bold leading-none">
                ebay:
              </h2>
              <p className="text-xl font-bold">{`mtg ${cardName}`}</p>
            </div>
            <div className="result">
              <h2 className="mb-2 mt-8 font-heading text-2xl font-bold leading-none">
                title:
              </h2>
              <p className="text-xl font-bold">{`MTG Magic the Gathering - ${cardName} - N/M (Near Mint) ${rarity} ${foil ? "FOIL" : ""}`}</p>
            </div>
            <div>
              <h2 className="mb-2 mt-8 font-heading text-2xl font-bold leading-none">
                Description:
              </h2>
              <p className="text-xl font-bold">{`BUY MULTIPLE ITEMS FOR BUNDLE DISCOUNT - MTG Magic the Gathering - ${cardName} - N/M (near Mint) ${rarity} ${foil ? "FOIL " : ""}- delivered with padding + inner and outer sleeve`}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
