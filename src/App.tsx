import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={50}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique illo libero, sequi necessitatibus aliquam adipisci, voluptate veritatis aspernatur minima aperiam ipsam doloribus at natus, accusamus totam maxime nulla corrupti nobis? Amet molestiae nam saepe enim in numquam officiis atque voluptate nulla quasi fugiat iste corrupti est accusamus incidunt reprehenderit itaque, porro possimus aperiam adipisci consequatur illo maxime tenetur! Distinctio sunt libero autem. Voluptatibus quos pariatur, doloribus qui fuga porro hic eligendi repellat labore nesciunt fugit a magni esse earum cumque alias. Provident cupiditate perferendis eligendi quisquam voluptate. Nulla, eligendi quisquam? Maiores, laboriosam similique. Illum, provident totam nulla perspiciatis nemo odio.
      </ExpandableText>
    </div>
  );
}

export default App;
