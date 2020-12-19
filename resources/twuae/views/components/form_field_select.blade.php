<div class="form-field form-field--select" data-strlen="{{strlen($field->displayName)}}">
    <label class="form-label form-label--select" for="field-{{\Illuminate\Support\Str::slug($field->displayName)}}">
        {{$field->displayName}}
        @if((int)$field->mandatory === 1)
        <sup class="required">*</sup>
        @endif
    </label>
    <div class="form-selectWrapper">
        <select name="{{\Illuminate\Support\Str::slug($field->displayName)}}"
            id="field-{{\Illuminate\Support\Str::slug($field->displayName)}}"
            @if($field->mandatory){{'required'}}@endif>
            <option @if(empty($field->defaultValue)){{'selected'}}@endif @if((int)$field->mandatory ===
                1){{'disabled'}}@endif
                >{{__('db.dropdown.select-one')}}</option>
            @foreach($field->values as $value)
            <option value="{{$value}}" @if($field->defaultValue === $value ||
                old(\Illuminate\Support\Str::slug($field->displayName), null) !== null){{'selected'}}@endif >{{$value}}
            </option>
            @endforeach
        </select>
    </div>

    @if($field->helper !== null)
    <small class="form-helperText">{{$field->helper}}</small>
    @endif
</div>
