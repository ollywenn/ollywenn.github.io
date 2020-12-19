<div class="form-field form-field--radio" data-strlen="{{strlen($field->displayName)}}">
    @foreach($field->values as $index => $value)
    <label class="form-labelRadio" for="field-{{\Illuminate\Support\Str::slug($field->displayName)}}-{{$index}}">
        <input type="radio" class="form-radio" name="{{\Illuminate\Support\Str::slug($field->displayName)}}"
            id="field-{{\Illuminate\Support\Str::slug($field->displayName)}}-{{$index}}" value="{{$value}}"
            @if($field->defaultValue === $value || old(\Illuminate\Support\Str::slug($field->displayName),
        null)
        !== null){{'checked'}}@endif @if($field->mandatory){{'required'}}@endif>
        <span class="form-labelContent">
            {{$field->displayName}}
            @if((int)$field->mandatory === 1)
            <sup class="required">*</sup>
            @endif
        </span>
    </label>
    @if($field->helper !== null)
    <small class="form-helperText">{{$field->helper}}</small>
    @endif
    @endforeach
</div>
