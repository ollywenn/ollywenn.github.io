<div class="form-field form-field--upload" data-strlen="{{strlen($field->displayName)}}">
    <label class="form-label form-label--upload" for="field-{{\Illuminate\Support\Str::slug($field->displayName)}}">
        {{$field->displayName}}
        @if((int)$field->mandatory === 1)
        <sup class="required">*</sup>
        @endif
    </label>
    <input type="file" name="{{\Illuminate\Support\Str::slug($field->displayName)}}"
        id="field-{{\Illuminate\Support\Str::slug($field->displayName)}}" @if($field->mandatory){{'required'}}@endif>
    @if($field->helper !== null)
    <small class="form-helperText">{{$field->helper}}</small>
    @endif
</div>
