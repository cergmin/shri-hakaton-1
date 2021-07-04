// BFS
const bfs = (tree) => {
    const queue = [tree];

    while (queue.length > 0) {
        const curr = queue.shift();

        console.log(curr.value);
        if (curr.children) {
            queue.push(...curr.children);
        }
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