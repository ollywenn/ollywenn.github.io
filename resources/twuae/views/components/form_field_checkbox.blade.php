<div class="form-field form-field--checkbox" data-strlen="{{strlen($field->displayName)}}">
    <label class="form-labelCheckbox" for="field-{{\Illuminate\Support\Str::slug($field->displayName)}}">
        <input class="form-checkbox" type="checkbox" name="{{\Illuminate\Support\Str::slug($field->displayName)}}"
            id="field-{{\Illuminate\Support\Str::slug($field->displayName)}}"
            @if(old(\Illuminate\Support\Str::slug($field->displayName), null) !== null){{'checked'}}@endif
        @if($field->mandatory){{'required'}}@endif>
        <span class="form-labelContent">
            {{$field->displayName}}@if((int)$field->mandatory === 1)
            <sup class="required">*</sup>
            @endif</span>
    </label>
    @if($field->helper !== null)
    <small class="form-helperText">{{$field->helper}}</small>
    @endif
</div>
