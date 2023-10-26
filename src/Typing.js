import React, { useState } from "react";

const Typing = (props) => {
  let string_array = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "pear",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
    "avocado",
    "blueberry",
    "cranberry",
    "guava",
    "lime",
    "papaya",
    "pineapple",
    "apricot",
    "blackberry",
    "coconut",
    "grapefruit",
    "pomegranate",
    "plum",
    "passionfruit",
    "kiwifruit",
    "mango",
    "nectarine",
    "lime",
    "lemon",
    "cherry",
    "pomegranate",
    "grape",
    "papaya",
    "blueberry",
    "raspberry",
    "apricot",
    "peach",
    "plum",
    "strawberry",
    "banana",
    "tangerine",
    "blackberry",
    "cranberry",
    "kiwi",
    "watermelon",
    "orange",
    "guava",
    "date",
    "elderberry",
    "honeydew",
    "fig",
    "passionfruit",
    "avocado",
    "grapefruit",
    "pear",
    "quince",
    "apple",
    "coconut",
    "pineapple",
    "mango",
    "nectarine",
    "lemon",
    "kiwifruit",
    "papaya",
    "cherry",
    "blueberry",
    "lime",
    "pomegranate",
    "plum",
    "strawberry",
    "raspberry",
    "apricot",
    "tangerine",
    "blackberry",
    "watermelon",
    "cranberry",
    "guava",
    "date",
    "elderberry",
    "grape",
    "fig",
    "orange",
    "passionfruit",
    "peach",
    "banana",
    "honeydew",
    "kiwi",
    "grapefruit",
    "papaya",
    "coconut",
    "avocado",
    "pineapple",
    "apple",
    "quince",
    "mango",
    "nectarine",
    "lemon",
  ];
  let word = props.word;
  let Settime = props.Settime;
  let time = props.time;

  function increaser(value) {
    let reducer = setInterval(() => {
      if (value === 0) {
        clearInterval(reducer);
        value=15;
        Settime(value);
      }
      Settime(value);
      value--;
    }, 1000);
    if (value === 0) {
      Settime(15);
    }
    console.log("called");
  }

  return (
    <div className="text-box">
      <div className="upper-text">
        <div className="span-words">
          {string_array.map((values, ind) =>
            ind <= word ? <span>{values} </span> : null
          )}
        </div>

        <div className="user-text">
          <textarea
            className="text-input"
            onFocus={() => increaser(time)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default Typing;
