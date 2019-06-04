const classes = [
	// -------------------------------------
	// browser builtins
	// -------------------------------------
	// 'Window',
	// 'Object',
	// 'Function',
	// 'Error',
	// 'Array',
	// 'HTMLCanvasElement',

	// -------------------------------------
	// Babylon stuff I'm guessing we don't need because we're not using it. It
	// might be intializing some things though we don't use them (f.e.
	// singletons)
	// -------------------------------------
	// 'PointerInfoBase',
	// 'Condition',
	// 'Action',
	// 'AbstractActionManager',
	// 'ColorCurves',
	// 'KeyboardInfo',
	// 'EasingFunction',
	// 'BackEase',
	// 'ExponentialEase',
	// 'FileFaceOrientation',
	// 'BaseTexture',
	// 'Texture',
	// 'Gamepad',
	// 'ArcRotateCameraGamepadInput',
	// 'ArcRotateCameraKeyboardMoveInput',
	// 'ArcRotateCameraMouseWheelInput',
	// 'BaseCameraPointersInput',
	// 'ArcRotateCameraPointersInput',
	// 'CameraInputsManager',
	// 'FlyCameraKeyboardInput',
	// 'FlyCameraMouseInput',
	// 'FollowCameraKeyboardMoveInput',
	// 'FollowCameraMouseWheelInput',
	// 'FollowCameraPointersInput',
	// 'FreeCameraKeyboardMoveInput',
	// 'FreeCameraMouseInput',
	// 'FreeCameraTouchInput',
	// 'FreeCameraGamepadInput',
	// 'TargetCamera',
	// 'ArcRotateCamera',
	// 'FlyCamera',
	// 'FollowCamera',
	// 'TouchCamera',
	// 'UniversalCamera',
	// 'PostProcess',
	// 'GamepadCamera',
	// 'RenderTargetTexture',
	// 'DeviceOrientationCamera',
	// 'VRDeviceOrientationFreeCamera',
	// 'HemisphericLight',
	// 'PoseEnabledController',
	// 'StandardMaterial',
	// 'ImageProcessingPostProcess',
	// 'VRExperienceHelperGazer',
	// 'Gizmo',
	// 'AxesViewer',
	// 'PhysicsJoint',
	// 'MotorEnabledJoint',
	// 'InstancedMesh',
	// 'WebVRController',
	// 'ShadowLight',
	// 'DirectionalLight',
	// 'SpotLight',
	// 'CubeTexture',
	// 'BackgroundMaterial',
	// 'PBRClearCoatConfiguration',
	// 'PBRAnisotropicConfiguration',
	// 'PBRBRDFConfiguration',
	// 'PBRSheenConfiguration',
	// 'PBRSubSurfaceConfiguration',
	// 'PBRBaseMaterial',
	// 'PBRMaterial',
	// '_DDSTextureLoader',
	// '_ENVTextureLoader',
	// '_KTXTextureLoader',
	// 'EffectLayer',
	// 'GlowLayer',
	// 'HighlightLayer',
	// 'MorphTarget',
	// 'ReflectionProbe',
	// 'PBRBaseSimpleMaterial',
	// 'PBRMetallicRoughnessMaterial',
	// 'PBRSpecularGlossinessMaterial',
	// '_TGATextureLoader',
	// 'ProceduralTexture',
	// 'CylinderParticleEmitter',
	// 'SphereParticleEmitter',
	// 'BaseParticleSystem',
	// 'PostProcessRenderEffect',
	// 'BlurPostProcess',
	// 'PostProcessRenderPipeline',
	// 'SSAO2RenderingPipeline',
	// 'SSAORenderingPipeline',
	// 'VolumetricLightScatteringPostProcess',
	// 'EdgesRenderer',
	// 'AbstractAssetTask',
	// 'SceneOptimization',
	// 'CellMaterial',
	// 'FireMaterial',
	// 'FurMaterial',
	// 'GradientMaterial',
	// 'GridMaterial',
	// 'LavaMaterial',
	// 'MixMaterial',
	// 'NormalMaterial',
	// 'SkyMaterial',
	// 'TerrainMaterial',
	// 'TriPlanarMaterial',
	// 'WaterMaterial',
	// 'PerfCounter',
	// 'PerformanceMonitor',
	// 'RollingAverage',
	// '_StencilState',
	// 'AudioEngine',
	// 'InputManager',
	// 'PostProcessManager',
	// 'BoundingInfo',
	// 'BoundingBox',
	// 'BoundingSphere',
	// 'Ray',

	// -------------------------------------
	// Babylon stuff I think we may most likely need
	// -------------------------------------
	'Matrix',
	'Node',
	'Size',
	'SmartArray',
	'TransformNode',
	'BaseSubMesh',
	'Material',
	'DataBuffer',
	'Camera',
	'MaterialDefines',
	'ImageProcessingConfiguration',
	'Light',
	'AbstractScene',
	'AbstractMesh',
	'FreeCamera',
	'PushMaterial',
	'Mesh',
	'Engine',
	'Observable',
	'EventState',
	'PointLight',
	'Vector2',
	'DefaultRenderingPipeline',
	'StandardRenderingPipeline',
	'SimpleMaterial',
	'_DepthCullingState',
	'_AlphaState',
	'EngineCapabilities',
	'BufferPointer',
	'Scene',
	'SmartArrayNoDuplicate',
	'RenderingManager',
	'RenderingGroupInfo',
	'UniformBuffer',
	'FreeCameraInputsManager',
	'WebGLDataBuffer',
	'_InternalAbstractMeshDataInfo',
	'_FacetDataStorage',
	'_MeshCollisionData',
	'_InternalMeshDataInfo',
	'_InstanceDataStorage',
	'_InstancesBatch',
	'VertexData',
	'Geometry',
	'VertexBuffer',
	'Buffer',
	'Vector3',
	'SubMesh',
	'PointerInfoPre',
	'PickingInfo',
	'Viewport',
	'Quaternion',
	'Plane',
	'RenderingGroup',
	'_OcclusionDataStorage',
	'SimpleMaterialDefines',
	'EffectFallbacks',
	'Effect',
	'WebGLPipelineContext',
	'Color3',
]
