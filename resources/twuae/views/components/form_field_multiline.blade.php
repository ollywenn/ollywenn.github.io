<div class="form-field form-field--textarea" data-strlen="{{strlen($field->displayName)}}">
    <label class="form-label form-label--textarea" for="field-{{\Illuminate\Support\Str::slug($field->displayName)}}">
        {{$field->displayName}}
        @if((int)$field->mandatory === 1)
        <sup class="required">*</sup>
        @endif
    </label>
    <textarea name="{{\Illuminate\Support\Str::slug($field->displayName)}}"
        id="field-{{\Illuminate\Support\Str::slug($field->displayName)}}"
        @if($field->mandatory){{'required'}}@endif>{{old(\Illuminate\Support\Str::slug($field->displayName), '')}}</textarea>
    @if($field->helper !== null)
    <small class="form-helperText">{{$field->helper}}</small>
    @endif
</div>
