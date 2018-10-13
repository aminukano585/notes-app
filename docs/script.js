const input = d3.select("input");
const preview = d3.select(".preview");

d3.select("#new-note")
    .on("submit", () => {
      d3.event.preventDefault();
      d3.select("#notes")
        .append("p")
          .classed("note", true)
          .text(input.property("value"));
      input.property("value", "");
      setPreview("");
    });

d3.select(".remove")
    .on("click", () => {
      d3.selectAll(".note")
          .remove();
    });

d3.select(".lucky")
  .on("click", () => {
    d3.selectAll(".note")
        .style("font-size", () => {
          return Math.random() * 100 + "px";
        });
  });

input.on("input", () => {
  const val = d3.event.target.value;
  setPreview(val);
})

function setPreview(val) {
  preview
      .classed("hide", val === "")
      .text(val);
}