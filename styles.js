var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "width" : 70.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 20,
      "border-color" : "rgb(0,0,0)",
      "shape" : "ellipse",
      "color" : "rgb(51,51,51)",
      "height" : 70.0,
      "text-max-width" : 100,
      "text-wrap" : "wrap",
      "background-color" : "rgb(127,205,187)",
      "text-opacity" : 1.0,
      "border-width" : 0.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[category = 'funder']",
    "css" : {
      "background-color" : "rgb(229,216,189)"
    }
  }, {
    "selector" : "node[category = 'Campus']",
    "css" : {
      "background-color" : "rgb(179,205,227)"
    }
  }, {
    "selector" : "node[category = 'Humanitarian/aid']",
    "css" : {
      "background-color" : "rgb(204,235,197)"
    }
  }, {
    "selector" : "node[category = 'Bandwagon']",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[category = 'Palestinian Advocacy']",
    "css" : {
      "background-color" : "rgb(254,217,166)"
    }
  }, {
    "selector" : "node[category = 'Legal']",
    "css" : {
      "background-color" : "rgb(222,203,228)"
    }
  }, {
    "selector" : "node[category = 'Research']",
    "css" : {
      "background-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "width" : 1.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "color" : "rgb(51,51,51)",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "line-color" : "rgb(153,153,153)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "opacity" : 1.0,
      "source-arrow-color" : "rgb(0,0,0)",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[relationship = 'funding']",
    "css" : {
      "line-color" : "rgb(77,175,74)"
    }
  }, {
    "selector" : "edge[relationship = 'partner']",
    "css" : {
      "line-color" : "rgb(255,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[relationship = 'funding']",
    "css" : {
      "width" : 4.0
    }
  }, {
    "selector" : "edge[relationship = 'partner']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]
