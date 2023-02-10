import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="backgroundColor">
      <div className="band">
        <Link className="card" to="/home">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1675510183229-c50371163c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
            }}
          />
          <article>
            <h1 className="title">My Blog Post 1</h1>
            <span>Thanadon Pongjessada</span>
          </article>
        </Link>

        <Link className="card" to="/home">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1675453987972-48f9d721281b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60")`,
            }}
          />
          <article>
            <h1 className="title">My Blog Post 2</h1>
            <span>Thanadon Pongjessada</span>
          </article>
        </Link>

        <Link className="card" to="/home">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1675352162037-792ae4045e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60")`,
            }}
          />
          <article>
            <h1 className="title">My Blog Post 3</h1>
            <span>Thanadon Pongjessada</span>
          </article>
        </Link>

        <Link className="card" to="/home">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1675516490928-e8fdfdf65ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60")`,
            }}
          />
          <article>
            <h1 className="title">My Blog Post 4</h1>
            <span>Thanadon Pongjessada</span>
          </article>
        </Link>

        <Link className="card" to="/home">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1674726240969-080afce91514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60")`,
            }}
          />
          <article>
            <h1 className="title">My Blog Post 5</h1>
            <span>Thanadon Pongjessada</span>
          </article>
        </Link>

        <Link className="card" to="/home">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1673870861514-8c72efb696f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60")`,
            }}
          />
          <article>
            <h1 className="title">My Blog Post 6</h1>
            <span>Thanadon Pongjessada</span>
          </article>
        </Link>
      </div>
    </div>
  );
}
