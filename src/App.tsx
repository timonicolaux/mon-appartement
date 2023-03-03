import React, { useState } from "react";
import Appartment from "./components/Appartment";
import NewAppartment from "./components/NewAppartment";
import { AppartmentInfo } from "./types/types";

function App() {
  const [appartmentInfo, setAppartmentInfo] = useState<AppartmentInfo[]>([
    {
      title: "73 Quivogne 1 - Chambre 1",
      address: "73 Rue Quivogne, 69002 Lyon",
      price: 710,
      description:
        "Cette superbe chambre en colocation, meublée, équipée et tout inclus à Lyon unit confort et design. Elle offre de nombreux équipements comme un lit confortable et hypoallergénique avec couette et oreillers. Ne vous manque plus à apporter que vos vêtements pour y vivre ! La chambre possède un cadenas si besoin.",
      url: "https://static.pic.chez-nestor.com/apartments/9fc996ef-e0ba-4bcf-b911-7ea35be93782/large.webp",
    },
    {
      title: "4 Jayet - Chambre 1",
      address: "4 Rue Etienne Jayet, 69007 Lyon",
      price: 700,
      description:
        "Cette superbe chambre en colocation, meublée, équipée et tout inclus à Lyon unit confort et design. Elle offre de nombreux équipements comme un lit confortable et hypoallergénique avec couette et oreillers. Ne vous manque plus à apporter que vos vêtements pour y vivre ! La chambre possède un cadenas si besoin.",
      url: "https://static.pic.chez-nestor.com/apartments/356bd44d-faaf-4a22-88cc-0bd2c4cad2e7/large.webp",
    },
  ]);
  return (
    <div>
      <div className="font-roboto mt-10">
        <NewAppartment
          appartmentInfo={appartmentInfo}
          setAppartmentInfo={setAppartmentInfo}
        />
        {appartmentInfo.map((elt, index) => (
          <Appartment
            appartmentInfo={appartmentInfo[index]}
            setAppartmentInfo={setAppartmentInfo}
            appartmentIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;