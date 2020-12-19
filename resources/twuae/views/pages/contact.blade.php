@extends('layouts.template')
@section('body-class', 'page--contact')

@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-contact.css').'?t='.$_SERVER['deployment_date']}}">
@endpush
@section('title', __('db.navigation.contact'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">

                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title">{{__('db.pages.contact.title')}}</h1>
                    </header>
                    <div class="article-body">
                        <div class="article-bodyCol">
                            @if (isset($errors) && is_object($errors) && $errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                            @endif
                            @if (session('submissionSent'))
                            <div>
                                <p>{{__('db.page.contact.success_submission')}}</p>
                            </div>
                            @endif

                            <form name="contactForm" action="{{route('contact-submit')}}" method="post"
                                class="form component--form">
                                <div class="form-field">
                                    <label class="form-label" for="firstName">{{__('db.page.contact.field.first-name')}}
                                        <sup class="required">*</sup></label>
                                    <input id="firstName" type="text" name="firstName" required>
                                    <small class="form-helperText form-helperText--error" data-error=""
                                        data-success=""></small>
                                </div>
                                <div class="form-field">
                                    <label class="form-label" for="lastName">{{__('db.page.contact.field.last-name')}}
                                        <sup class="required">*</sup></label>
                                    <input id="lastName" type="text" name="lastName" required>
                                    <small class="form-helperText form-helperText--error" data-error=""
                                        data-success=""></small>
                                </div>
                                <div class="form-field">
                                    <label class="form-label" for="email">{{__('db.page.contact.field.email')}} <sup
                                            class="required">*</sup></label>
                                    <input id="email" type="email" name="email" required>
                                    <small class="form-helperText form-helperText--error" data-error=""
                                        data-success=""></small>
                                </div>
                                <div class="form-field form-field--select">
                                    <label class="form-label form-label--select"
                                        for="enquiryType">{{__('db.page.contact.field.enquiry-type')}}
                                        <sup class="required">*</sup></label>
                                    <div class="form-selectWrapper">
                                        <select id="enquiryType" name="enquiryType" required>
                                            <option selected="selected">
                                                {{__('db.page.contact.field.enquiry-type-default')}}
                                            </option>
                                            @foreach($enquiryTypes as $type)
                                            <option value="{{\Illuminate\Support\Str::slug($type->title)}}">
                                                {{$type->title}}
                                            </option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <small class="form-helperText form-helperText--error" data-error=""
                                        data-success=""></small>
                                </div>
                                <div class="form-field">
                                    <label class="form-label" for="subject">{{__('db.page.contact.field.subject')}} <sup
                                            class="required">*</sup></label>
                                    <input id="subject" type="text" name="subject" required>
                                    <small class="form-helperText form-helperText--error" data-error=""
                                        data-success=""></small>
                                </div>
                                <div class="form-field">
                                    <label class="form-label" for="message">{{__('db.page.contact.field.message')}} <sup
                                            class="required">*</sup></label>
                                    <textarea id="message" name="message" required></textarea>
                                    <small class="form-helperText form-helperText--error" data-error=""
                                        data-success=""></small>
                                </div>
                                <div class="form-content">
                                    <p><sup class="required">*</sup> = Required</p>
                                </div>
                                <button type="submit"
                                    class="btn--submit btn--large btn--square">{{__('db.page.contact.button.submit')}}</button>
                            </form>
                        </div>
                        <div class="article-bodyCol">
                            <div class="contact--map">
                                <iframe src="{{config('app.config.map_url')}}" width="100%" height="320" frameborder="0"
                                    style="border:0" allowfullscreen=""></iframe>
                            </div>
                            @if(array_key_exists('company',$boxes))
                            {!! $boxes['company'][1]['shortText'] !!}
                            @endif
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    </div>

    @stop
