$(function() {
    "use strict";

    function e(e, n) {
        for (var t = n.length, o = 0; t >= o; o++) {
            var s = n[o].title;
            if (s === e) return n[o];
        }
        return null;
    }
    
    var n = "#cy",
        network = networks[Object.keys(networks)[0]],
        style = styles[0];
    
    $(n).cytoscape({
        layout: {
            name: "preset",
            padding: 10
        },
        boxSelectionEnabled: true,
        ready: function() {
            window.cy = this; 
            cy.load(network.elements); 
            console.log(network);
            console.log(style);
            var o = e("default", style);
            if (o === null) {
                o = style;
            }
            cy.style().fromJson(o.style).update();

            cy.on('tap', 'node', function(event) {
                console.log('Event object:', event); // Log the event object
            
                // Get the node from the event's cyTarget property
                var node = event.cyTarget; // This should give you the node directly
            
                if (node.length > 0 && node.isNode()) { // Ensure it's a valid node
                    console.log('Tapped node:', node); // Log the tapped node
            
                    // Clear highlights from all nodes and edges
                    cy.nodes().removeClass('highlighted');
                    cy.edges().removeClass('highlighted');
            
                    // Highlight connected edges for the tapped node
                    var connectedEdges = node.connectedEdges();
                    connectedEdges.addClass('highlighted');
            
                    // Highlight neighbors of the tapped node
                    var neighbors = connectedEdges.connectedNodes();
                    console.log('Neighbors:', neighbors); // Log neighbors for debugging
                    neighbors.addClass('highlighted');
                } else {
                    console.error('Node is undefined or not a node');
                }
            });
        }
    });
});
