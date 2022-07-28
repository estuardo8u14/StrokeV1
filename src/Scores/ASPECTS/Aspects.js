import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import "./styles.css";
import OutlinedButtons2 from "./Aspectsbutt";

export default function Aspects() {
  const [query, setQuery] = useState(1);

  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { id: 5, shape: "circle", coords: [170, 100, 10], preFillColor: "#fff" },
    ],
  });

  // const getTipPosition = area => {
  //   const obj = { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  //   console.log(obj);
  // };

  const handleUpdateMapArea = useCallback(
    (evt) =>
      updateMapArea(5, [evt.nativeEvent.layerX, evt.nativeEvent.layerY, 10]),
    []
  );

  /**
   * Update image area when updated
   *
   * @see https://github.com/coldiary/react-image-mapper/issues/32
   */
  useEffect(() => {
    setQuery(Math.random());
  }, [mapAreas]);

  const updateMapArea = (id, coords) => {
    console.log(id, coords);
    const areas = mapAreas.areas.map((item) =>
      item.id === id ? { ...item, coords } : item
    );
    setMapAreas({
      name: mapAreas.name,
      areas,
    });
  };

  return (
    <div className="App">
      <h1>ASPECTS</h1>
      <h2>Marcar territorios M1-M6</h2>

      <ImageMapper
        src={`https://slideplayer.es/slide/3200350/11/images/41/Figure+6.+Schematic+shows+the+10+regions+of+the+MCA+distribution%2C+each+of+which+accounts+for+one+point+in+the+ASPECTS+system%3A+M1%2C+M2%2C+M3%2C+M4%2C+M5%2C+M6%2C+the+caudate+nucleus+%28C%29%2C+the+lentiform+nucleus+%28L%29%2C+the+internal+capsule+%28IC%29%2C+and+the+insular+cortex+%28I%29.+For+each+area+involved+in+ischemia+depicted+at+unenhanced+CT%2C+one+point+is+subtracted+from+the+total+score+of+10..jpg`}
        //onClick={area => getTipPosition(area)}
        onImageClick={handleUpdateMapArea}
        map={mapAreas}
        width={500}
      />
      <pre>
        Intrucciones: <br />
        click en las areas afectadas para obtener resultados
      </pre>
      <OutlinedButtons2></OutlinedButtons2>
    </div>
  );
}
