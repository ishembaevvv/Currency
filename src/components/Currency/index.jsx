import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { from_val, inp, reverse, sumbit, to_val } from "../../store/actions";
import data from "./data";

export default function Currency() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state.fromVal);

  return (
    <div>
      Amout:{" "}
      <input
        type="number"
        onChange={(e) => dispatch(inp(parseInt(e.target.value)))}
        className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
      />
      <br />
      <br />
      From:{" "}
      <select
        className="bg-green-500 h-9 rounded-lg hover:bg-white hover:text-green-500 hover:border-green-500 transition-all"
        onChange={(e) => dispatch(from_val(parseFloat(e.target.value)))}
      >
        {data.map((el, id) => {
          return (
            <option key={id} value={el.val}>
              {el.name}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <button
        onClick={() => dispatch(reverse())}
        className="relative border-2 border-black group hover:border-green-500 w-12 h-12 duration-500 overflow-hidden"
        type="button"
      >
        <p className="font-Manrope text-3xl text-white h-full w-full flex items-center justify-center duration-500 relative z-10 group-hover:scale-0">
          ⟲
        </p>
        <span className="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"></span>
        <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"></span>
        <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"></span>
        <span className="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"></span>
      </button>
      <br />
      <br />
      To:{" "}
      <select
        className="bg-green-500 h-9 rounded-lg hover:bg-white hover:text-green-500 hover:border-green-500 transition-all"
        onChange={(e) => dispatch(to_val(parseFloat(e.target.value)))}
      >
        {data.map((el, id) => {
          return (
            <option key={id} value={el.val}>
              {el.name}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <button onClick={() => dispatch(sumbit())} className="button">
        <span>Submit</span>
      </button>
      <br />
      <br />
      <div className="card">
        <h2>RESULT: {state.result}</h2>
      </div>
    </div>
  );
}
