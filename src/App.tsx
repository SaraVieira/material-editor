import { Canvas } from "@react-three/fiber";

import { useState } from "react";

import { cn } from "./lib/utils";
import { Slider } from "./components/ui/slider";
import { Label } from "./components/ui/label";
import { ColorPicker } from "./components/ColorPicker";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { MainScene } from "./components/MainScene";

function App() {
  const [color, setColor] = useState("#ECC833");
  const [sheenColor, setSheenColor] = useState("#ECC833");
  const [emissiveColor, setEmissiveColor] = useState("#000");
  const [emissiveIntensity, setEmissiveIntensity] = useState([0]);
  const [roughness, setRoughness] = useState([0.5]);
  const [reflectivity, setReflectivity] = useState([0.5]);
  const [metalness, setMetalness] = useState([0]);
  const [transmission, setTransmission] = useState([0]);
  const [thickness, setThickness] = useState([0]);
  const [clearcoat, setClearcoat] = useState([0]);
  const [iridescence, setIridescence] = useState([0]);
  const [transparent, setTransparent] = useState(false);
  const [sheen, setSheen] = useState([0]);
  const [map, setMap] = useState("");
  const [aoMap, setAoMap] = useState("");
  const [roughnessMap, setRoughnessMap] = useState("");
  const [normalIntensity, setNormalIntensity] = useState([1]);
  const [normalMap, setNormalMap] = useState("");
  const [displacementlIntensity, setDisplacementlIntensity] = useState([0]);
  const [displacementlMap, setDisplacementlMap] = useState("");
  const [aoIntensity, setAoIntensity] = useState([1]);
  return (
    <div className="container mx-auto mt-8 min-h-screen">
      <div className="min-h-screen grid grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <Label>Color</Label>
          <ColorPicker color={color} onChange={setColor} />
          <Input
            className={cn("w-[60%]")}
            type="file"
            onChange={(e) =>
              e.target.files && setMap(URL.createObjectURL(e.target.files[0]))
            }
          />
          <div>
            <Label>Roughness</Label>
            <Slider
              onValueChange={(value) => setRoughness(value)}
              value={roughness}
              max={1}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
            <Input
              className={cn("w-[60%] mt-4")}
              type="file"
              onChange={(e) =>
                e.target.files &&
                setRoughnessMap(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
          <div>
            <Label>Metalness</Label>
            <Slider
              onValueChange={(value) => setMetalness(value)}
              value={metalness}
              max={1}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div>
            <Label>Transmission</Label>
            <Slider
              onValueChange={(value) => setTransmission(value)}
              value={transmission}
              max={1.2}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div>
            <Label>Thickness</Label>
            <Slider
              onValueChange={(value) => setThickness(value)}
              value={thickness}
              max={5}
              min={0}
              step={0.1}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div>
            <Label>Clearcoat</Label>
            <Slider
              onValueChange={(value) => setClearcoat(value)}
              value={clearcoat}
              max={5}
              min={0}
              step={0.1}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div>
            <Label>Reflectivity</Label>
            <Slider
              onValueChange={(value) => setReflectivity(value)}
              value={reflectivity}
              max={1}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div>
            <Label>Irdescence</Label>
            <Slider
              onValueChange={(value) => setIridescence(value)}
              value={iridescence}
              max={1}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div>
            <Label>Sheen</Label>
            <Slider
              onValueChange={(value) => setSheen(value)}
              value={sheen}
              max={1}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Sheen Color</Label>
            <ColorPicker color={sheenColor} onChange={setSheenColor} />
          </div>
          <div>
            <Label>Emissive Intensity</Label>
            <Slider
              onValueChange={(value) => setEmissiveIntensity(value)}
              value={emissiveIntensity}
              max={5}
              min={0}
              step={0.1}
              className={cn("w-[60%] mt-2")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Emission Color</Label>
            <ColorPicker color={emissiveColor} onChange={setEmissiveColor} />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="transparent"
              checked={transparent}
              onCheckedChange={(e) => setTransparent(!!e)}
            />
            <label
              htmlFor="transparent"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Transparent
            </label>
          </div>
          <div>
            <Label>AO Map</Label>
            <Slider
              onValueChange={(value) => setAoIntensity(value)}
              value={aoIntensity}
              max={5}
              min={0}
              step={0.1}
              className={cn("w-[60%] mt-2")}
            />
            <Input
              className={cn("w-[60%] mt-4")}
              type="file"
              onChange={(e) =>
                e.target.files &&
                setAoMap(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
          <div>
            <Label>Normal</Label>
            <Slider
              onValueChange={(value) => setNormalIntensity(value)}
              value={normalIntensity}
              max={10}
              min={1}
              step={0.1}
              className={cn("w-[60%] mt-2")}
            />
            <Input
              className={cn("w-[60%] mt-4")}
              type="file"
              onChange={(e) =>
                e.target.files &&
                setNormalMap(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
          <div>
            <Label>Displacement</Label>
            <Slider
              onValueChange={(value) => setDisplacementlIntensity(value)}
              value={displacementlIntensity}
              max={10}
              min={0}
              step={0.01}
              className={cn("w-[60%] mt-2")}
            />
            <Input
              className={cn("w-[60%] mt-4")}
              type="file"
              onChange={(e) =>
                e.target.files &&
                setDisplacementlMap(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
        </div>
        <Canvas shadows>
          <MainScene
            color={color}
            roughness={roughness[0]}
            metalness={metalness[0]}
            transmission={transmission[0]}
            thickness={thickness[0]}
            clearcoat={clearcoat[0]}
            reflectivity={reflectivity[0]}
            iridescence={iridescence[0]}
            sheen={sheen[0]}
            transparent={transparent}
            emissiveColor={emissiveColor}
            emissiveIntensity={emissiveIntensity[0]}
            sheenColor={sheenColor[0]}
            map={map}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
            aoIntensity={aoIntensity}
            normalIntensity={normalIntensity}
            normalMap={normalMap}
            displacementlIntensity={displacementlIntensity}
            displacementlMap={displacementlMap}
          />
        </Canvas>
      </div>
    </div>
  );
}
export default App;
