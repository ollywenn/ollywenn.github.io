@foreach($fields as $field)
    <p><strong>{{$field->displayName}}:</strong></p>
    <p>
        @if($field->fieldType !== 'FileUpload')
            {{$data[\Illuminate\Support\Str::slug($field->displayName)]}}
        @else
            {{$files[\Illuminate\Support\Str::slug($field->displayName)]}}
        @endif
    </p>
    <hr>
@endforeach
