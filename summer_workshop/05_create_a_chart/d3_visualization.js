const margin = {top: 20, right: 30, bottom: 40, left: 210},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    
const svg = d3.select("#visualization")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

const url = 'https://ghibliapi.herokuapp.com/films';
d3.json(url).then( data => {
    data.forEach(d => {
       d.rt_score = parseInt(d.rt_score);
    });
    
    data.sort( (a,b) => b.rt_score - a.rt_score );

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([ 0, width]);
        
    const y = d3.scaleBand()
        .domain(data.map(function(d) { return d.title; }))
        .range([ 0, height ])
        .padding(.1);
   
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));
        
    svg.selectAll("movie")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0) )
        .attr("y", function(d) { return y(d.title); })
        .attr("width", function(d) { return x(d.rt_score); })
        .attr("height", y.bandwidth() )
        .attr("fill", "#b8b2a4");
});