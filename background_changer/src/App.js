import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("salmon");
 const buttonData = [
  { label: 'Red', color: 'red' },
  { label: 'Green', color: 'green' },
  { label: 'Blue', color: 'blue' },
  { label: 'Yellow', color: 'yellow' },
  { label: 'Pink', color: 'pink' },
  { label: 'Orange', color: 'orange' },
  { label: 'Maroon', color: 'maroon' },
  { label: 'Navy', color: 'navy' },
  { label: 'Teal', color: 'teal' },
  { label: 'Salmon', color: 'salmon' },
  { label: 'Aqua', color: 'aqua' },
  { label: 'White', color: 'white' },
  { label: 'Orchid', color: 'orchid' },
  { label: 'Indigo', color: 'indigo' },
  { label: 'Violet', color: 'violet' },
  { label: 'Black', color: 'black' },
  { label: 'Cyan', color: 'cyan' },
  { label: 'Lavender', color: 'lavender' },
  { label: 'Gold', color: 'gold' },
  { label: 'Coral', color: 'coral' },
  { label: 'Olive', color: 'olive' },
  { label: 'SlateGray', color: 'slategray' },
  { label: 'Silver', color: 'silver' },
  { label: 'Magenta', color: 'magenta' },
  { label: 'Brown', color: 'brown' },
  { label: 'Turquoise', color: 'turquoise' },
  { label: 'Tan', color: 'tan' },
  { label: 'Chartreuse', color: 'chartreuse' },
  { label: 'SeaGreen', color: 'seagreen' },
  { label: 'Tomato', color: 'tomato' },
  { label: 'RosyBrown', color: 'rosybrown' },
  { label: 'Plum', color: 'plum' },
  { label: 'MidnightBlue', color: 'midnightblue' },
  { label: 'ForestGreen', color: 'forestgreen' },
  { label: 'FireBrick', color: 'firebrick' },
  { label: 'DarkKhaki', color: 'darkkhaki' },
  { label: 'DodgerBlue', color: 'dodgerblue' },
  { label: 'HotPink', color: 'hotpink' },
  { label: 'LightSkyBlue', color: 'lightskyblue' },
  { label: 'SlateBlue', color: 'slateblue' },
  { label: 'Chartreuse', color: 'chartreuse' },
  { label: 'DarkOrange', color: 'darkorange' },
  { label: 'DeepPink', color: 'deeppink' },
  { label: 'GoldenRod', color: 'goldenrod' },
  { label: 'MediumPurple', color: 'mediumpurple' },
  { label: 'PaleGreen', color: 'palegreen' },
  { label: 'RosyBrown', color: 'rosybrown' },
  { label: 'SlateBlue', color: 'slateblue' }
];

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center py-4 inset-x-0 ">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-500 px-3 py-3 rounded-3xl'>
          {buttonData.map((button, index) => (
            <button
              key={index}
              className={`transition-all duration-300 transform hover:scale-110 active:scale-95 outline-none flex items-center justify-center px-4 py-1 rounded-full  shadow-lg ${button.color === 'white' ? 'text-black' : 'text-white'}`}
              style={{ backgroundColor: button.color }}
              onClick={() => setColor(button.color)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
