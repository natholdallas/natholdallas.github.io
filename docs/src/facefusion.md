# Facefusion

需要两个工具 `uv`, `micromamba`

## Installation

```bash
git clone https://github.com/facefusion/facefusion.git
```

## Usage (uv)

```bash
uv venv
uv pip install requirements.txt
uv run facefusion.py run
```

## Config

```ini
[paths]
temp_path = .temp
jobs_path =
source_paths =
target_path =
output_path = .dir

[patterns]
source_pattern =
target_pattern =
output_pattern =

[face_detector]
face_detector_model =
face_detector_size =
face_detector_margin =
face_detector_angles =
face_detector_score =

[face_landmarker]
face_landmarker_model =
face_landmarker_score =

[face_selector]
face_selector_mode =
face_selector_order =
face_selector_age_start =
face_selector_age_end =
face_selector_gender =
face_selector_race =
reference_face_position =
reference_face_distance =
reference_frame_number =

[face_masker]
face_occluder_model = xseg_2
face_parser_model = bisenet_resnet_34
face_mask_types = box region occlusion
face_mask_areas =
face_mask_regions =
face_mask_blur =
face_mask_padding =

[voice_extractor]
voice_extractor_model =

[frame_extraction]
trim_frame_start =
trim_frame_end =
temp_frame_format =
keep_temp =

[output_creation]
output_image_quality =
output_image_scale =
output_audio_encoder =
output_audio_quality =
output_audio_volume =
output_video_encoder =
output_video_preset =
output_video_quality =
output_video_scale =
output_video_fps =

[processors]
processors = face_swapper face_enhancer
age_modifier_model =
age_modifier_direction =
background_remover_model =
background_remover_color =
deep_swapper_model =
deep_swapper_morph =
expression_restorer_model =
expression_restorer_factor =
expression_restorer_areas =
face_debugger_items =
face_editor_model =
face_editor_eyebrow_direction =
face_editor_eye_gaze_horizontal =
face_editor_eye_gaze_vertical =
face_editor_eye_open_ratio =
face_editor_lip_open_ratio =
face_editor_mouth_grim =
face_editor_mouth_pout =
face_editor_mouth_purse =
face_editor_mouth_smile =
face_editor_mouth_position_horizontal =
face_editor_mouth_position_vertical =
face_editor_head_pitch =
face_editor_head_yaw =
face_editor_head_roll =
face_enhancer_model = gfpgan_1.4
face_enhancer_blend =
face_enhancer_weight =
face_swapper_model = hififace_unofficial_256
face_swapper_pixel_boost =
face_swapper_weight =
frame_colorizer_model =
frame_colorizer_size =
frame_colorizer_blend =
frame_enhancer_model =
frame_enhancer_blend =
lip_syncer_model =
lip_syncer_weight =

[uis]
open_browser =
ui_layouts =
ui_workflow =

[download]
download_providers =
download_scope =

[benchmark]
benchmark_mode =
benchmark_resolutions =
benchmark_cycle_count =

[execution]
execution_device_ids =
execution_providers =
execution_thread_count =

[memory]
video_memory_strategy =
system_memory_limit =

[misc]
log_level =
halt_on_error =
```

## Cuda >= 13

```bash
uv pip uninstall onnxruntime-gpu
uv pip install flatbuffers numpy packaging protobuf sympy
uv pip install --pre --index-url https://aiinfra.pkgs.visualstudio.com/PublicPackages/_packaging/ort-cuda-13-nightly/pypi/simple/ onnxruntime-gpu
```

## Nsfw >= 3.5

`facefusion/content_analyser.py` 把各种校验的 bool 返回一个 False 即可
`facefusion/core.py` line 124: return all(module.pre_check() for module in common_modules)
`facefusion/uis/components/preview.py` 待定，新版可能不需要修改
