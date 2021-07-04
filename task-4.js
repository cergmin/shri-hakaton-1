// DFS
const dfs = (tree) => {
    console.log(tree.value);

    if (!tree.children) {
        return;
    }

    for (const child of tree.children) {
        dfs(child);
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
dfs(tree);