const getTemplate = (name: string, host: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <script src="${host}/public/aframe.min.js"></script>
    <script src="${host}/public/aframe-ar.js"></script>
    <style>
        .a-enter-vr-button {
            display: none;
        }
    </style>
    <body style="margin : 0px; overflow: hidden;">
        <a-scene embedded arjs>
            <a-marker preset="hiro">
                <a-entity position="0 0 0" scale="0.01 0.01 0.01" rotation="0 0 0" id="entity" gltf-model="${host}/${name}/scene.gltf">
                </a-entity>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    </body>

    </html>
    `;
};

export default getTemplate;
