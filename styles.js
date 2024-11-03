var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-width" : 0.0,
      "background-color" : "rgb(127,205,187)",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "height" : 130.0,
      "shape" : "ellipse",
      "width" : 130.0,
      "background-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "text-valign" : "center",
      "text-halign" : "center",
      "border-opacity" : 1.0,
      "font-size" : 20,
      "color" : "rgb(0,0,0)",
      "text-max-width" : 100,
      "text-wrap" : "wrap",
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
    "selector" : "node[selected]",
    "css" : {
      "background-opacity" : 1.0
    }
  }, {
    "selector" : "node[!selected]",
    "css" : {
      "background-opacity" : 0.5
    }
  }, {
    "selector" : "node[shared_name = 'Node 3']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[shared_name = 'Node 2']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[shared_name = 'Node 5']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[shared_name = 'Node 4']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[shared_name = 'Node 1']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[shared_name = 'Node 7']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[shared_name = 'Node 6']",
    "css" : {
      "width" : 70.0,
      "height" : 70.0
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
      "background-opacity" : 1.0
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(51,51,51)",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "font-size" : 10,
      "line-style" : "solid",
      "width" : 1.0,
      "source-arrow-color" : "rgb(0,0,0)",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "text-opacity" : 0.0,
      "line-color" : "rgb(153,153,153)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
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
    "selector" : "edge[!selected]",
    "css" : {
      "opacity" : 0.27450980392156865
    }
  }, {
    "selector" : "edge[relationship = 'funding']",
    "css" : {
      "width" : 7.0
    }
  }, {
    "selector" : "edge[relationship = 'partner']",
    "css" : {
      "width" : 2.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "opacity" : 1.0
    }
  },{
    "selector": "node.highlighted",
    "css" : {
      "background-opacity" : 1.0
    }
  },
  {
    "selector": "edge.highlighted",
    "css" : {
      "opacity" : 1.0
    }
  }
 ]
} ]