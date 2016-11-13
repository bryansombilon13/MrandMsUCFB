(function() {
  var graph = d3.select('.graph');
  var data = [

    {
    'name': '#1 - Mr. GIDEON',
    'score': 430
    },

    {
    'name': '#1 - Ms. JAJA',
    'score': 295
    },

    {
    'name': '#2 - Mr. SHITTU',
    'score': 158
    },

    {
    'name': '#2 - Ms. MOUTRIE',
    'score': 232
    },

    {
    'name': '#3 - Mr. DAKS',
    'score': 192
    },

    {
    'name': '#3 - ROSY',
    'score': 414
    },

    {
    'name': '#4 - Mr. KARL',
    'score': 640
    },

    {
    'name': '#4 - Ms. NICOLE',
    'score': 619
    },

    {
    'name': '#5 - Mr. IAN',
    'score': 194
    },

    {
    'name': '#5 - Ms. VON',
    'score': 299
    },

    {
    'name': '#6 - Mr. RUSSEL',
    'score': 285
    },

    {
    'name': '#6 - Ms. CHOY',
    'score': 412
    },

    {
    'name': '#7 - Mr. CLARK',
    'score': 126
    },

    {
    'name': '#7 - Ms. LABS',
    'score': 420
    },

    {
    'name': '#8 - Mr. MATT',
    'score': 609
    },

    {
    'name': '#8 - Ms. TIN',
    'score': 245
    },

    {
    'name': '#9 - Mr. AL',
    'score': 382
    },

    {
    'name': '#9 - Ms. EVA',
    'score': 460
    },

    {
    'name': '#10 - Mr. KEN',
    'score': 178
    },
    {
    'name': '#10 - Ms. KAT',
    'score': 694
    },

    {
    'name': '#11 - Mr. NEERO',
    'score': 215
    },

    {
    'name': '#11 - Ms. NICOLE',
    'score': 506
    },

    {
    'name': '#12 - Mr. ROYCE',
    'score': 499
    },

    {
    'name': '#12 - Ms. KAMILE',
    'score': 118
    },

    {
    'name': '#13 - Mr. HANZ',
    'score': 226
    },

    {
    'name': '#13 - Ms. ANGEL',
    'score': 281
    },

    {
    'name': '#14 - Mr. DARYL',
    'score': 419
    },
    
    {
    'name': '#14 - Ms. NOMSO',
    'score': 151
    },






    ];
  var containerBars = graph.selectAll('div').data(data).enter().append('div');
  
  var xScale = d3.scale.linear().range([100, 0]);
  
  var xMin = 0;
  var xMax = d3.max(data, function(data) {
    return data.score;
  })*1.1;
  
  xScale.domain([xMin, xMax]);
  
containerBars.append('p').attr('class', 'name').text(function(data) {
    return data.name;
  }).append('span').attr('class', 'score').text(function(data) {
    return ' (' + data.score + ')';
})
  
var bars =  containerBars.append('div').attr({
    'class': 'bar'
  });
  
var infoBar =  bars.append('div').attr({
    'class': 'infoBar'
 }).style('left', function(data) {
  return '-100%';
});

  infoBar.transition().duration(1500).ease('cubic-out').style({
    'left': function(data) {
      return - xScale(data.score) + '%'
    }
  });
    
    
    

}())