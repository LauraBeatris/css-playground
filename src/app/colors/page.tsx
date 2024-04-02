import "./styles.css";

export default function Colors() {
  return (
    <main>
      <h1>Colors</h1>

      <section>
        <h2>Color Formats</h2>
        Most common ways to represent colors in CSS:
        <ul>
          <li>
            <strong>Hex Codes</strong>: <code>#FF0000</code>
          </li>
          <li>
            <strong>Keywords</strong>: <code>red</code>
          </li>
          <li>
            <strong>RGB</strong>: <code>rgb(255, 0, 0)</code>
          </li>
          <li>
            <strong>HSL</strong>: <code>hsl(0, 100%, 50%)</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>Pros and Cons</h2>

        <section>
          <h2>Keywords</h2>
          <h4>Pros</h4>
          <ul>
            <li>Good for education content</li>
            <li>Easier to understand by reading</li>
          </ul>

          <h4>Cons</h4>
          <ul>
            <li>Not a way to tweak multiple shades of the same color</li>
            <li>Not recommended to real in production applications</li>
          </ul>
        </section>

        <section>
          <h2>Hex Codes</h2>
          <p>A way to represent RGB colors with hexadecimal values</p>
          <h4>Cons</h4>
          <ul>
            <li>Pretty difficult to read</li>
          </ul>
        </section>

        <section>
          <h2>RGB</h2>
          <p>A way to represent RGB colors in a decimal system</p>
          <h4>Pros</h4>
          <ul>
            <li>Easier to read, not needing convertion</li>
          </ul>
          <h4>Cons</h4>
          <ul>
            <li>
              Not actually clear when looking in a color, on how to transform
              it, eg: saturation
            </li>
          </ul>
        </section>

        <section>
          <h2>HSL</h2>
          <p>By far the best format ✨</p>
          <h4>Pros</h4>
          <ul>
            <li>Easier to read, not needing convertion</li>
            <li>First value depresents degrees</li>
            <li>
              Second value represents saturation - how vibrant the color is
            </li>
            <li>
              Third value represents lightness - how light or dark the color is
            </li>
          </ul>
        </section>
      </section>

      <section>
        <h2>Transparency</h2>

        <div className="box-container">
          <div className="first box"></div>
          <div className="second box"></div>
          <div className="third box"></div>
          <div className="fourth box"></div>
        </div>
      </section>

      <section>
        <h2>Background colors</h2>

        <p>
          This is a paragraph with a <em>highlighted section</em>.
        </p>
      </section>
    </main>
  );
}
