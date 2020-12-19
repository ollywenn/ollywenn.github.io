@extends('layouts.template')
@section('body-class', 'page--profile')

@push('styles')
<link rel="stylesheet" href="{{ProjectHelper::asset('css/page-profile.css').'?t='.$_SERVER['deployment_date']}}">
@endpush
@section('title', __('db.navigation.profile'))

@section('content')
<main>
    <div class="main-segment">
        <div class="wrapper">
            <div class="main-content">
                <article class="article">
                    <header class="article-header">
                        <h1 class="article-title">{{__('db.pages.profile.title')}}</h1>
                    </header>
                    <div class="accordion-wrapper">
                        <ul class="">
                            <li><a class="pointer active js-accordion"
                                    onclick="showDetails(this)">{{__('db.profile_page.my_details')}}</a>
                            </li>
                            <li><a class="pointer js-accordion"
                                    onclick="showSavedArticles(this)">{{__('db.profile_page.saved_articles')}}</a>
                            </li>
                        </ul>
                    </div>
                    <!-- My Details section ---------------------------------------------------------------->
                    <div class="article-body">
                        <div class="article-bodyCol">
                            <div id="details" class="accordion-tab js-accordion-tab show">
                                <!-- forms -->
                                <form class="form component--form" autocomplete="chrome-off" id="profile-form"
                                    action="/update-profile" method="post" enctype="multipart/form-data"
                                    data-error-message="{{__('db.category_my_details.submission_error')}}">

                                    <div class="form-field">
                                        <label class="form-label @if(!empty($user->firstName)) is-active @endif"
                                            for="firstName">{{__('db.page.contact.field.first-name')}}
                                            <sup class="required">*</sup></label>
                                        <input id="firstName" type="text" name="firstName" required
                                            value="{{$user->firstName}}">
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>
                                    <div class="form-field">
                                        <label class="form-label @if(!empty($user->lastName)) is-active @endif"
                                            for="lastName">{{__('db.page.contact.field.last-name')}}
                                            <sup class="required">*</sup></label>
                                        <input id="lastName" type="text" name="lastName" required
                                            value="{{$user->lastName}}">
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>

                                    <div class="form-field">
                                        <label class="form-label @if(!empty($user->email)) is-active @endif"
                                            for="tw_email">{{__('db.label.email') ?? ''}}
                                            <sup class="required">*</sup></label>
                                        <input id="tw_email" type="text" name="tw_email" required
                                            value="{{$user->email}}">
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>

                                    <div class="form-field">
                                        <label class="form-label @if(!empty($user->phone)) is-active @endif"
                                            for="phone">{{__('db.label.phone') ?? ''}}
                                            <sup class="required">*</sup></label>
                                        <input id="phone" type="text" name="phone" required value="{{$user->phone}}">
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>

                                    <div class="form-field form-field--select">
                                        <label class="form-label form-label--select"
                                            for="sector">{{__('db.label.industry_sector') ?? ''}}
                                            <sup class="required">*</sup></label>
                                        <div class="form-selectWrapper">
                                            <select id="sector" name="sector">
                                                <option value="" selected="selected">Please select</option>
                                                @foreach($sectors as $sector)
                                                <option value="{{$sector->cms_id}}" @if($user->meta->sector ==
                                                    $sector->cms_id)
                                                    selected
                                                    @endif
                                                    >{{$sector->title}}
                                                </option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>

                                    <div class="form-field">
                                        <label class="form-label @if(!empty($user->meta->company)) is-active @endif"
                                            for="company">{{__('db.label.company_name') ?? ''}}
                                            <sup class="required">*</sup></label>
                                        <input id="company" type="text" name="company" required
                                            value="{{$user->meta->company}}">
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>

                                    <div class="form-field form-field--select">
                                        <label class="form-label form-label--select"
                                            for="jobRole">{{__('db.label.job_role') ?? ''}}
                                            <sup class="required">*</sup></label>
                                        <div class="form-selectWrapper">
                                            <select id="jobRole" name="jobRole">
                                                <option value="" selected="selected">Please select</option>
                                                @foreach($jobRoles as $role)
                                                <option value="{{$role->cms_id}}" @if($user->meta->jobRole ==
                                                    $role->cms_id)
                                                    selected
                                                    @endif
                                                    >{{$role_data->title}}
                                                </option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>

                                    <div class="form-field">
                                        <label class="form-label @if(!empty($user->meta->jobTitle)) is-active @endif"
                                            for="jobTitle">{{__('db.label.job_title') ?? ''}}
                                            <sup class="required">*</sup></label>
                                        <input id="jobTitle" type="text" name="jobTitle" required
                                            value="{{$user->meta->jobTitle}}">
                                        <small class="form-helperText form-helperText--error" data-error=""
                                            data-success=""></small>
                                    </div>


                                    <div class="form-field">
                                        <label class="form-labelCheckbox">
                                            <input class="form-checkbox" type="checkbox" id="agreement-tickbox"
                                                name="agreement_tickbox" {{$user->agreement_status ? 'checked' : ''}}>
                                            <span class="form-labelContent">Click here if you agree to be contacted by
                                                The Travel Weekly Team to keep you informed of latest news by
                                                email.</span>
                                        </label>
                                    </div>

                                    <button type="submit js-submit-profile" class="btn btn--submit"
                                        aria-label="{{__('db.label.save')}}">{{__('db.label.save') ?? 'Save'}}
                                    </button>

                                </form>
                                <a onclick="Popup.createPassword()" class="btn--secondary">
                                    {{__('db.profile_page.change_your_password')}}
                                </a>
                            </div>
                            <div id="articles" class="accordion-tab js-accordion-tab">
                                @if(!is_iterable($savedArticles) || count($savedArticles)==0)
                                <p>We are looking hard, but can't find any saved articles.</p>
                                <img src="/img/whereisit.png"
                                    alt="person looks through a telescope - this is an icon when we cant find saved articles"
                                    width="300">

                                <p>Did you know that you can save articles for reading it later? just click on the icon
                                    ([icon here]) in an article and you will always find it here</p>
                                @else
                                @php($totalArticles = count($savedArticles))

                                <section class="saved-articles-holder">
                                    <div class="saved-text">{{__('db.my_preferences.saved_articles.you_saved')}}</div>
                                    <div class="plain-button">
                                        <span class="wrapper js-saved-article-counter"
                                            data-singular="{{__('db.my_preferences.saved_articles.article')}}"
                                            data-plural="{{__('db.my_preferences.saved_articles.articles')}}">{{$totalArticles}}
                                            @if($totalArticles ==
                                            1){{__('db.my_preferences.saved_articles.article')}}@else{{__('db.my_preferences.saved_articles.articles')}}@endif
                                        </span>
                                    </div>
                                </section>
                                <section class="articles-section">
                                    <div class="block-content bottom-four-article">

                                        <!-- Article -->
                                        <div class="bottom-text-block block-content-holder">
                                            <div class="internal-four" id="loadmore-target-saved-articles">
                                                @php($sizes =
                                                ['xxlg'=>'500x360','xlg'=>'500x360','lg'=>'500x360','md'=>'334x240','sm'=>'340x247'])
                                                @foreach($savedArticles as $article)
                                                @include('templates.components.articles.text_bottom_saved',
                                                [
                                                'article'=>$article,
                                                'orientation' => 'horizontal',
                                                'sizes' => $sizes
                                                ])
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                @endif
                            </div>

                        </div>


                        <div class="article-bodyCol">


                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>
@push('scripts')
<script src="{{ProjectHelper::asset('js/profile.js'.'?t='.$_SERVER['deployment_date'])}}">
</script>
@endpush
@endsection
