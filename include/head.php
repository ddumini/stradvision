<!DOCTYPE html>
<html lang="ko">
  <head>
    <title><?php if($PageTitle!=""){echo $PageTitle . " - ";}?>스트라드비젼</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="Publisher" content="Sumin Kim" />
    <meta name="Designer" content="" />
    <!-- OG -->
    <!--
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php if($PageTitle!=''){echo $PageTitle . ' - ';}?>타이틀" />
    <meta name="description" content="사이트설명" />
    <meta property="og:description" content="사이트설명" />
    <meta property="og:image" content="대표이미지주소(full_url):관리자등록권장/이미지크기(1200x630px)">
    <meta property="og:url" content="웹사이트url">
    <meta name="url" content="웹사이트url">
    <link rel="canonical" href="웹사이트url" />
    -->
    <!-- //OG -->
    <meta name="robots" content="noindex" /> <!-- 오픈 전 삭제 부탁합니다!!! : 검색엔진로봇 수집을 막음 -->
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/image/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/image/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/image/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/image/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/image/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/image/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/image/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/image/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/image/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/image/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/image/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon/favicon-16x16.png">
    <link rel="manifest" href="/image/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/image/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- //favicon -->
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <!-- //fonts -->
    <link type="text/css" rel="stylesheet" href="/css/base.css?t=<?php echo time(); ?>" />
    <link type="text/css" rel="stylesheet" href="/css/layout.css?t=<?php echo time(); ?>" />
    <link type="text/css" rel="stylesheet" href="/css/common.css?t=<?php echo time(); ?>" />
    <link type="text/css" rel="stylesheet" href="/css/main.css?t=<?php echo time(); ?>" />
    <link type="text/css" rel="stylesheet" href="/css/sub.css?t=<?php echo time(); ?>" />
    <link type="text/css" rel="stylesheet" href="/css/board.css?t=<?php echo time(); ?>" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/splitting@1.0.6/dist/splitting-cells.min.css">
    <link
      type="text/css"
      rel="stylesheet"
      media="screen and (max-width: 1200px)"
      href="/css/main_m.css?t=<?php echo time(); ?>" />
    <link
      type="text/css"
      rel="stylesheet"
      media="screen and (max-width: 1200px)"
      href="/css/sub_m.css?t=<?php echo time(); ?>" />
    <link type="text/css" rel="stylesheet" href="/css/slick.min.css?t=<?php echo time(); ?>" />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.css' integrity='sha512-FA9cIbtlP61W0PRtX36P6CGRy0vZs0C2Uw26Q1cMmj3xwhftftymr0sj8/YeezDnRwL9wtWw8ZwtCiTDXlXGjQ==' crossorigin='anonymous'/>
    <link type="text/css" rel="stylesheet" href="/css/jquery.fullpage.css?t=<?php echo time(); ?>" />
    <script>
      window.addEventListener('DOMContentLoaded', function () {
        if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
          alert('본 사이트는 Internet Explore 이용이 불가능합니다.');
          window.open('microsoft-edge:' + window.location.href);
        } else {
          document.getElementById('wrap').style.visibility = 'inherit';
        }
      });
    </script>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script defer type="text/javascript" src="/js/slick.min.js"></script>
    <script defer type="text/javascript" src="/js/slickNav.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
      integrity="sha512-A64Nik4Ql7/W/PJk2RNOmVyC/Chobn5TY08CiKEX50Sdw+33WTOpPJ/63bfWPl0hxiRv1trPs5prKO8CpA7VNQ=="
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/splitting@1.0.6/dist/splitting.min.js"></script>
    <script defer type="text/javascript" src="/js/script.js?t=<?php echo time(); ?>"></script>
  </head>

  <body>
    <!--Wrap-->
    <div id="wrap">
