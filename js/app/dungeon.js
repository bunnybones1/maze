define(['lib/three', 'constants', 'party', 'direction'], function(THREE, Const, Party, Direction) {
    function Dungeon() {
        // this.map = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //             [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        //             [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        //             [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        //             [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        //             [0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        //             [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        //             [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        //             [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        //             [0, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        //             [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.map = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

        this.spawn_loc = {x: 3, y: 9};
        this.spawn_dir = Direction.NORTH;
    }

    Dungeon.prototype = {
        partyCollidesWith: function(x, y) {
            if (y >= 0 && y < this.map.length) {
                var row = this.map[y];
                if (x >= 0 && x < row.length) {
                    return Const.TILES[row[x]].isSolid;
                }
            }
            return false;
        },

        spawnParty: function() {
            var self = this;
            return new Party(this.spawn_loc.x,
                             this.spawn_loc.y,
                             this.spawn_dir,
                             function(x, y) {
                                 return self.partyCollidesWith(x, y);
                             });
        },

        addMeshesToScene: function(scene) {
            var texLoader = new THREE.TextureLoader();
            var map = this.map

            // texLoader.load('./js/app/portal-3.gif', function (texture) {

            texLoader.load('textures/brick/diffuse.png', function(diffuse) {
                diffuse.magFilter = THREE.NearestFilter
                diffuse.minFilter = THREE.NearestFilter
                diffuse.wrapS = diffuse.wrapT = THREE.RepeatWrapping;
                diffuse.repeat.set(1, 1);
                
                texLoader.load('textures/brick/normal.png', function(normal) {
                    normal.magFilter = THREE.NearestFilter
                    normal.minFilter = THREE.NearestFilter
                    normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
                    normal.repeat.set(1, 1);

                    var material = new THREE.MeshPhongMaterial({
                        map: diffuse,
                        normalMap: normal,
                        shininiess: 1
                    });

                    var basicWallGeom = new THREE.BoxGeometry(1, 1, 1);
                    var basicTileGeom = new THREE.PlaneGeometry(1, 1, 1);
                    for (var y = 0; y < map.length; y++) {
                        var row = map[y];
                        for (var x = 0; x < row.length; x++) {
                            var type = row[x];

                            if (type == 0) {
                                // const ran = Math.random()
                                // if(ran < .09){
                                //     const material = new THREE.MeshPhongMaterial({ map: texture });
                                //     const basicWallGeom = new THREE.BoxGeometry(1, 1, 1)
                                //     // const geometry = new THREE.PlaneGeometry(5, 5);
                                //     const mesh = new THREE.Mesh(basicWallGeom, material);

                                //     mesh.castShadow = true;
                                //     mesh.receiveShadow = true;
                                //     mesh.name = 'portal'

                                //     mesh.position.x = x;
                                //     mesh.position.y = 0.5;
                                //     mesh.position.z = y;
                                //     scene.add(mesh);

                                //     // var mesh1 = new THREE.Mesh(basicWallGeom, material);
                                //     // mesh1.castShadow = true;
                                //     // mesh1.receiveShadow = true;

                                //     // mesh1.position.x = x;
                                //     // mesh1.position.y = 0.5;
                                //     // mesh1.position.z = y;
                                //     // scene.add(mesh1);
                                // } else {
                                    // var mesh = new THREE.Mesh(basicWallGeom, material);
                                    // mesh.castShadow = true;
                                    // mesh.receiveShadow = true;

                                    // mesh.position.x = x;
                                    // mesh.position.y = 0.5;
                                    // mesh.position.z = y;
                                    // scene.add(mesh);
                                // }
                            } 
                            if (type == 1 || type == 2) {
                                var floorMesh = new THREE.Mesh(basicTileGeom, material);
                                floorMesh.castShadow = true;
                                floorMesh.receiveShadow = true;

                                floorMesh.position.x = x;
                                floorMesh.position.y = 0;
                                floorMesh.position.z = y;
                                floorMesh.rotation.x = Math.PI*-0.5;
                                scene.add(floorMesh);

                                var ceilMesh = new THREE.Mesh(basicTileGeom, material);
                                ceilMesh.castShadow = true;
                                ceilMesh.receiveShadow = true;

                                ceilMesh.position.x = x;
                                ceilMesh.position.y = 1;
                                ceilMesh.position.z = y;
                                ceilMesh.rotation.x = Math.PI*0.5;
                                scene.add(ceilMesh);
                            } 
                            // else 
                            if(type == 0) {

                                // 2. Create a texture
                                // console.log(texture)
                                // (This step is basically done by the loader, so you directly get the texture)

                                // 3. Create a material
                                    

                               
                            }
                        }
                    }
                });
            });
            // });

        }
    };

    return Dungeon;
});
