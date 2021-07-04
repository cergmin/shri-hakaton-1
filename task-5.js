// BFS
const queue = [];
const bfs = (tree) => {
    console.log(tree.value);

    if (tree.children) {
        queue.push(...tree.children);
    }

    if (queue.length > 0) {
        bfs(queue.shift());
    }
};

const tree = {
    "value": 1,
    "children": [
        {
            "value": 2,
            "children": [
                {
                    "value": 4
                }, 
                {
                    "value": 5,
                    "children": [
                        {
                            "value": 7
                        },
                        {
                            "value": 8
                        }
                    ]
                }
            ]
        }, 
        {
            "value": 3,
            "children": [
                {
                    "value": 6,
                    "children": [
                        {
                            "value": 9
                        }
                    ]
                }
            ]
        }
    ]
};
bfs(tree);