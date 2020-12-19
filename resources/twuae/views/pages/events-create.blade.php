@extends('layouts.template')
@section('body-class', 'page--event-create')
@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-events.css').'?t='.$_SERVER['deployment_date']}}">
@endpush

@section('title', __('db.pages.events.create_event'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title">{{__('db.pages.events.create_event')}}</h1>
                    </header>
                    <div class="article-body">
                        @if (session('success'))
                            <div class="alert-success">
                                {{__('db.pages.events.create_event.event_under_review')}}
                            </div>
                        @endif

                        @if (session('error'))
                            <div class="alert-error">
                                {!! session('error') !!}
                            </div>
                        @endif
                        <form action="{{route('store-event')}}" method="post" enctype="multipart/form-data"
                        class="form component--form">
                            <div class="form-field">
                                <label class="form-label" for="title">Title <sup class="required">*</sup></label>
                                <input id="title" name="title" type="text" value="{{old('title')}}" required>
                                @if ($errors->any())
                                    @foreach($errors->get('title') as $message)
                                        <small class="form-helperText form-helperText--error" data-error=""
                                    data-success="">{{ $message }}</small>
                                    @endforeach
                                @endif
                            </div>
                            <div class="form-field">
                                <label class="form-label" for="firstName">Photo <sup class="required">*</sup></label>
                                <input id="firstName" type="text" name="firstName" required>
                                <input id="image" name="image" type="file" accept="image/x-png,image/gif,image/jpeg"
                                    required>
                                @if ($errors->any())
                                    @foreach($errors->get('image') as $message)
                                        <small class="form-helperText form-helperText--error" data-error="" data-success="">{{ $message }}</small>
                                    @endforeach
                                @endif
                            </div>
                            <div class="form-field">
                                <label class="form-label" for="description">Short description <sup
                                        class="required">*</sup></label>
                                <textarea id="message" name="message" required>{{old('description')}}</textarea>
                                @if ($errors->any())
                                    @foreach($errors->get('description') as $message)
                                        <small class="form-helperText form-helperText--error" data-error=""
                                        data-success="">{{ $message }}</small>
                                    @endforeach
                                @endif
                            </div>
                            <div class="form-field">
                                <label class="form-label form-label--date" for="startDate">Start date <sup class="required">*</sup></label>
                                <input id="startDate" name="startDate" type="date" placeholder="YYYY-mm-dd HH:MM"
                                        value="{{old('startDate')}}" required maxlength="16">
                                @if ($errors->any())
                                    @foreach($errors->get('startDate') as $message)
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success="">{{ $message }}</small>
                                    @endforeach
                                @endif
                            </div>
                            <div class="form-field">
                                <label class="form-label form-label--date" for="endDate">End date <sup class="required">*</sup></label>
                                <input id="endDate" name="endDate" type="date" placeholder="YYYY-mm-dd HH:MM"
                                        value="{{old('endDate')}}" required maxlength="16">
                                @if ($errors->any())
                                    @foreach($errors->get('startDate') as $message)
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success="">{{ $message }}</small>
                                    @endforeach
                                @endif
                            </div>
                            <div class="form-field">
                                <label class="form-label" for="link">Link to external page</label>
                                <input id="link" name="link" type="url" value="{{old('link')}}">
                            </div>
                            <div class="form-field">
                                <label class="form-label" for="comment">Submission comment <sup
                                        class="required">*</sup></label>
                                <textarea id="comment" name="comment" required>{{old('comment')}}</textarea>
                                @if ($errors->any())
                                    @foreach($errors->get('comment') as $message)
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success="">{{ $message }}</small>
                                    @endforeach
                                @endif
                            </div>
                            @if(!\Illuminate\Support\Facades\Auth::check())
                                <div class="form-field">
                                    <label class="form-label" for="email">Email Address <sup
                                            class="required">*</sup></label>
                                    <input id="email" type="email" name="email" value="{{old('email')}}" required>
                                    @if ($errors->any())
                                        @foreach($errors->get('email') as $message)
                                            <small class="form-helperText form-helperText--error" data-error=""
                                                data-success="">{{ $message }}</small>
                                        @endforeach
                                    @endif
                                </div>
                            @endif
                            <div class="form-content">
                                <p><sup class="required">*</sup> = Required</p>
                            </div>
                            <button type="submit"
                                class="btn--submit btn--large btn--square">{{__('db.page.contact.button.submit')}}</button>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>
@endsection
