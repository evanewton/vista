(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"verticalAlign":"top","backgroundColorDirection":"vertical","horizontalAlign":"left","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","children":["this.MainViewer","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9"],"borderRadius":0,"paddingLeft":0,"vrPolyfillScale":0.5,"overflow":"hidden","scripts":{"textToSpeech":TDV.Tour.Script.textToSpeech,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"historyGoBack":TDV.Tour.Script.historyGoBack,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openLink":TDV.Tour.Script.openLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"init":TDV.Tour.Script.init,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initQuiz":TDV.Tour.Script.initQuiz,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setValue":TDV.Tour.Script.setValue,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setLocale":TDV.Tour.Script.setLocale,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"shareSocial":TDV.Tour.Script.shareSocial,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showWindow":TDV.Tour.Script.showWindow,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"clone":TDV.Tour.Script.clone,"translate":TDV.Tour.Script.translate,"executeJS":TDV.Tour.Script.executeJS},"mobileMipmappingEnabled":false,"paddingRight":0,"mouseWheelEnabled":true,"scrollBarMargin":2,"scrollBarColor":"#000000","backgroundOpacity":1,"downloadEnabled":false,"mediaActivationMode":"window","backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"definitions": [{"class":"PlayList","id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist","items":[{"media":"this.media_2FDD2301_3D0B_717D_4197_D06BE21428E5","camera":"this.media_2FDD2301_3D0B_717D_4197_D06BE21428E5_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist, 0)"},{"media":"this.media_1C1D9327_3D37_5185_41C8_000196A76AAD","camera":"this.media_1C1D9327_3D37_5185_41C8_000196A76AAD_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist, 1)"},{"media":"this.panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_camera"}]},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":0,"iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44.png","id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Left"}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":0,"iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396.png","id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Right"}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","minHeight":0,"iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421.png","id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Next"}},{"height":"100%","borderRadius":0,"paddingLeft":0,"overflow":"scroll","paddingRight":0,"scrollBarColor":"#000000","backgroundOpacity":0,"scrollBarMargin":2,"layout":"horizontal","class":"Container","toolTipHorizontalAlign":"center","paddingTop":0,"scrollBarVisible":"rollOver","children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6"],"gap":0,"minHeight":1,"id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6","paddingBottom":0,"minWidth":1,"shadow":false,"propagateClick":false,"scrollBarOpacity":0.5,"left":"25%","top":"0%","contentOpaque":false,"right":"25%","verticalAlign":"middle","borderSize":0,"scrollBarWidth":10,"horizontalAlign":"center","data":{"name":"Center"}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":0,"iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF.png","id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Down"}},{"duration":100,"class":"FadeInEffect","id":"effect_3061B548_231D_5DCD_41B4_93FF66204E67","easing":"linear"},{"data":{"name":"THUMBNAIL LIST"},"selectedItemBackgroundColorRatios":[0],"paddingLeft":14,"itemVerticalAlign":"middle","itemBorderRadius":0,"itemLabelGap":8,"itemBackgroundColorRatios":[],"paddingRight":14,"backgroundOpacity":0.9,"itemLabelFontColor":"#999999","itemHorizontalAlign":"center","itemLabelHorizontalAlign":"center","backgroundColorRatios":[0],"itemPaddingLeft":3,"itemLabelPosition":"bottom","class":"ThumbnailList","itemThumbnailOpacity":1,"layout":"horizontal","rollOverItemLabelFontWeight":"normal","itemLabelTextDecoration":"none","backgroundColor":["#534741"],"toolTipHorizontalAlign":"center","maxWidth":800,"paddingTop":10,"itemMode":"normal","gap":10,"minHeight":20,"paddingBottom":0,"minWidth":20,"itemLabelFontSize":"12px","propagateClick":false,"itemLabelFontWeight":"normal","scrollBarOpacity":0,"itemThumbnailScaleMode":"fit_outside","verticalAlign":"top","bottom":70,"itemBackgroundOpacity":0,"selectedItemLabelFontWeight":"bold","horizontalAlign":"left","rollOverItemBackgroundOpacity":0,"backgroundColorDirection":"vertical","borderRadius":0,"itemPaddingBottom":3,"itemBackgroundColorDirection":"vertical","rollOverItemLabelFontColor":"#FFFFFF","scrollBarColor":"#FFFFFF","itemLabelFontStyle":"normal","selectedItemBorderSize":2,"itemOpacity":1,"itemPaddingRight":3,"selectedItemBackgroundColor":["#534741"],"itemLabelFontFamily":"Arial","itemThumbnailWidth":120,"itemThumbnailHeight":70,"playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist","scrollBarVisible":"rollOver","itemPaddingTop":3,"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839","scrollBarMargin":0,"selectedItemBorderColor":"#FFFFFF","left":"1%","shadow":false,"selectedItemLabelFontColor":"#FFFFFF","scrollBarWidth":5,"itemBackgroundColor":[],"itemThumbnailBorderRadius":0,"itemThumbnailShadow":false,"borderSize":0,"selectedItemBackgroundOpacity":0.9,"right":"1%"},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","minHeight":0,"iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D.png","id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Previous"}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3061B548_231D_5DCD_41B4_93FF66204E67, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)","minHeight":0,"iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181.png","id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Collapse"}},{"backgroundColorDirection":"vertical","data":{"name":"SETTINGS"},"borderRadius":0,"paddingLeft":0,"overflow":"scroll","paddingRight":0,"scrollBarColor":"#000000","backgroundOpacity":0.9,"scrollBarMargin":2,"layout":"absolute","backgroundColorRatios":[0],"class":"Container","maxWidth":800,"backgroundColor":["#534741"],"toolTipHorizontalAlign":"center","paddingTop":0,"children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6"],"gap":10,"minHeight":1,"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487","paddingBottom":0,"minWidth":1,"scrollBarVisible":"rollOver","borderSize":0,"propagateClick":false,"scrollBarOpacity":0.5,"left":"1%","contentOpaque":false,"bottom":20,"right":"1%","verticalAlign":"top","shadow":false,"scrollBarWidth":10,"horizontalAlign":"left","height":50},{"loop":false,"thumbnailUrl":"media/media_1C1D9327_3D37_5185_41C8_000196A76AAD_t.jpg","data":{"label":"PISCINA"},"partial":false,"id":"media_1C1D9327_3D37_5185_41C8_000196A76AAD","pitch":0,"hfovMin":60,"label":trans('media_1C1D9327_3D37_5185_41C8_000196A76AAD.label'),"vfov":180,"class":"Video360","video":["this.videores_1CA2F175_3D0D_D185_41A1_844D8CAE016B","this.videores_1CA2D176_3D0D_D187_41C5_7CAF772D94A6"],"hfovMax":140,"hfov":360},{"duration":100,"class":"FadeOutEffect","id":"effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043","easing":"linear"},{"loop":false,"thumbnailUrl":"media/media_2FDD2301_3D0B_717D_4197_D06BE21428E5_t.jpg","data":{"label":"CASA"},"partial":false,"id":"media_2FDD2301_3D0B_717D_4197_D06BE21428E5","pitch":0,"hfovMin":60,"label":trans('media_2FDD2301_3D0B_717D_4197_D06BE21428E5.label'),"vfov":180,"class":"Video360","video":["this.videores_1F2AA369_3D15_518D_41AD_034229E79D1F","this.videores_1F2B336A_3D15_518F_41C0_59DD2002E491"],"hfovMax":140,"hfov":360},{"duration":200,"class":"FadeInEffect","id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7","easing":"linear"},{"playbackBarHeadOpacity":1,"subtitlesPaddingLeft":5,"height":"100%","vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"paddingLeft":0,"vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","playbackBarOpacity":1,"paddingRight":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"transitionDuration":500,"progressOpacity":1,"subtitlesTextShadowHorizontalLength":1,"progressRight":0,"toolTipDisplayTime":600,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressOpacity":1,"toolTipFontFamily":"Arial","playbackBarHeadBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":0,"subtitlesTextDecoration":"none","displayTooltipInSurfaceSelection":true,"class":"ViewerArea","playbackBarBottom":5,"progressBarBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipOpacity":1,"playbackBarHeadBorderColor":"#000000","toolTipHorizontalAlign":"center","surfaceReticleSelectionColor":"#FFFFFF","paddingTop":0,"progressBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0,0.43,0.8],"playbackBarProgressBackgroundColorDirection":"vertical","minHeight":50,"progressLeft":0,"progressBackgroundOpacity":1,"paddingBottom":0,"minWidth":100,"surfaceReticleOpacity":0.6,"subtitlesFontFamily":"Arial","surfaceReticleSelectionOpacity":1,"toolTipShadowColor":"#333333","subtitlesTop":0,"propagateClick":false,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowBlurRadius":0,"playbackBarHeight":10,"playbackBarBorderSize":0,"toolTipBorderRadius":3,"toolTipFontWeight":"normal","subtitlesPaddingTop":5,"subtitlesFontWeight":"normal","playbackBarHeadBackgroundColorDirection":"vertical","toolTipShadowSpread":0,"toolTipPaddingBottom":4,"playbackBarHeadWidth":6,"subtitlesShadow":false,"toolTipBorderSize":1,"toolTipBorderColor":"#767676","progressBorderColor":"#000000","toolTipPaddingTop":4,"borderRadius":0,"playbackBarProgressBorderSize":0,"toolTipShadowOpacity":1,"playbackBarBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","playbackBarRight":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF","#3300FF","#66FF00"],"toolTipTextShadowBlurRadius":3,"playbackBarProgressBorderRadius":0,"progressBarOpacity":0.66,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBottom":0,"playbackBarLeft":0,"doubleClickAction":"toggle_fullscreen","transitionMode":"blending","subtitlesEnabled":true,"subtitlesOpacity":1,"playbackBarHeadShadowVerticalLength":0,"subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowOpacity":0,"progressHeight":10,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadHeight":15,"width":"100%","subtitlesBackgroundColor":"#000000","subtitlesFontSize":"3vmin","toolTipShadowBlurRadius":3,"translationTransitionDuration":1000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"toolTipShadowHorizontalLength":0,"progressBorderSize":0,"id":"MainViewer","subtitlesHorizontalAlign":"center","toolTipFontStyle":"normal","shadow":false,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesVerticalAlign":"bottom","progressBarBorderSize":0,"playbackBarBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"subtitlesPaddingRight":5,"playbackBarHeadShadow":true,"subtitlesBottom":50,"subtitlesBorderSize":0,"data":{"name":"Main Viewer"},"borderSize":0,"toolTipPaddingLeft":6,"toolTipShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600"},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":0,"iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64.png","id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Up"}},{"horizontalAlign":"right","height":"100%","borderRadius":0,"paddingLeft":0,"overflow":"scroll","paddingRight":10,"scrollBarMargin":2,"scrollBarColor":"#000000","backgroundOpacity":0,"layout":"horizontal","class":"Container","width":"30%","toolTipHorizontalAlign":"center","paddingTop":0,"scrollBarVisible":"rollOver","children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421"],"gap":0,"minHeight":1,"id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36","paddingBottom":0,"minWidth":1,"shadow":false,"propagateClick":false,"scrollBarOpacity":0.5,"top":"0%","right":"0%","verticalAlign":"middle","borderSize":0,"scrollBarWidth":10,"contentOpaque":false,"data":{"name":"Right"}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":0,"iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A.png","id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Zoom In"}},{"duration":100,"class":"FadeOutEffect","id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F","easing":"linear"},{"horizontalAlign":"left","borderRadius":0,"paddingLeft":10,"overflow":"scroll","paddingRight":0,"scrollBarMargin":2,"scrollBarColor":"#000000","backgroundOpacity":0,"layout":"horizontal","class":"Container","width":"30%","toolTipHorizontalAlign":"center","paddingTop":0,"scrollBarVisible":"rollOver","children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354"],"gap":0,"minHeight":1,"id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF","paddingBottom":0,"minWidth":1,"shadow":false,"propagateClick":false,"scrollBarOpacity":0.5,"left":"0%","top":"0%","data":{"name":"Left"},"verticalAlign":"middle","borderSize":0,"scrollBarWidth":10,"contentOpaque":false,"height":"100%"},{"viewerArea":"this.MainViewer","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396","touchControlMode":"drag_rotation","aaEnabled":true,"buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64","displayPlaybackBar":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44","zoomEnabled":true,"id":"MainViewerPanoramaPlayer","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF","buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A","surfaceSelectionEnabled":false},{"borderRadius":0,"paddingLeft":0,"visible":false,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"class":"IconButton","transparencyActive":true,"maxHeight":46,"width":92,"maxWidth":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","minHeight":1,"iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9.png","id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9","paddingBottom":0,"minWidth":1,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"top":"35%","bottom":"35%","right":"1%","verticalAlign":"middle","horizontalAlign":"center","data":{"name":"-next"}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839.get('visible')){ visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839) } else { invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839) }","minHeight":0,"iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354.png","id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"toggle","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Thumblist"}},{"id":"panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_21E63D49_3D35_318D_41C5_94DF5BA9CB4F","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"borderRadius":0,"paddingLeft":0,"visible":false,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"class":"IconButton","transparencyActive":true,"maxHeight":46,"width":92,"maxWidth":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","minHeight":1,"iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0.png","id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","paddingBottom":0,"minWidth":1,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"left":"1%","top":"35%","bottom":"35%","data":{"name":"-previous"},"verticalAlign":"middle","horizontalAlign":"center"},{"id":"media_2FDD2301_3D0B_717D_4197_D06BE21428E5_camera","automaticZoomSpeed":10,"manualRotationSpeed":1800,"hoverFactor":0,"manualZoomSpeed":1,"class":"RotationalCamera","automaticRotationSpeed":10,"initialPosition":{"class":"RotationalCameraPosition","yaw":0,"pitch":0,"hfov":120}},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_pressed.png","class":"IconButton","transparencyActive":true,"width":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":0,"iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793.png","id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793","paddingBottom":0,"minWidth":0,"shadow":false,"mode":"push","borderSize":0,"propagateClick":false,"rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Zoom Out"}},{"id":"media_1C1D9327_3D37_5185_41C8_000196A76AAD_camera","automaticZoomSpeed":10,"manualRotationSpeed":1800,"hoverFactor":0,"manualZoomSpeed":1,"class":"RotationalCamera","automaticRotationSpeed":10,"initialPosition":{"class":"RotationalCameraPosition","yaw":0,"pitch":0,"hfov":120}},{"data":{"name":"-Expand"},"borderRadius":0,"paddingLeft":0,"visible":false,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"class":"IconButton","transparencyActive":true,"maxHeight":46,"maxWidth":46,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)","minHeight":1,"iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8.png","id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","paddingBottom":0,"minWidth":1,"mode":"push","borderSize":0,"propagateClick":false,"left":"40%","shadow":false,"rollOverIconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_rollover.png","bottom":0,"right":"40%","verticalAlign":"middle","horizontalAlign":"center","height":46},{"class":"Panorama","hfovMin":"150%","label":trans('panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":24,"rowCount":4,"height":2048,"width":12288,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_0/{face}/0/{row}_{column}.jpg"},{"colCount":12,"rowCount":2,"height":1024,"width":6144,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_0/{face}/1/{row}_{column}.jpg"},{"colCount":6,"rowCount":1,"height":512,"width":3072,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_0/{face}/2/{row}_{column}.jpg"}]},"thumbnailUrl":"media/panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_t.jpg"}],"data":{"label":"GS__0028"},"partial":false,"vfov":180,"thumbnailUrl":"media/panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_t.jpg","id":"panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4","hfovMax":130,"pitch":0,"hfov":360},{"borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"pressedIconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_pressed.png","class":"IconButton","transparencyActive":true,"maxHeight":46,"width":46,"maxWidth":46,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":1,"iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6.png","id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6","paddingBottom":0,"minWidth":1,"mode":"push","borderSize":0,"propagateClick":false,"shadow":false,"rollOverIconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_rollover.png","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"VR"}},{"toolTipPaddingBottom":4,"toolTipBorderSize":1,"toolTipBorderColor":"#767676","toolTipPaddingTop":4,"borderRadius":0,"paddingLeft":0,"toolTipShadowOpacity":1,"toolTipTextShadowColor":"#000000","toolTipTextShadowBlurRadius":3,"paddingRight":0,"cursor":"hand","backgroundOpacity":0,"toolTipBackgroundColor":"#F6F6F6","toolTipDisplayTime":600,"toolTipFontFamily":"Arial","class":"IconButton","toolTipPaddingRight":6,"toolTipTextShadowOpacity":0,"transparencyActive":true,"maxHeight":46,"width":46,"maxWidth":46,"toolTipFontSize":12,"toolTipHorizontalAlign":"center","toolTipOpacity":1,"paddingTop":0,"toolTipShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"minHeight":1,"iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.png","id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","paddingBottom":0,"minWidth":1,"toolTipFontColor":"#606060","toolTipShadowColor":"#333333","mode":"toggle","borderSize":0,"propagateClick":false,"toolTipBorderRadius":3,"toolTipShadowVerticalLength":0,"shadow":false,"toolTipFontStyle":"normal","rollOverIconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_rollover.png","toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.toolTip'),"toolTipPaddingLeft":6,"toolTipFontWeight":"normal","height":46,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"fullscreen"},"toolTipShadowSpread":0},{"duration":200,"class":"FadeOutEffect","id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5","easing":"linear"},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.media_2FDD2301_3D0B_717D_4197_D06BE21428E5","camera":"this.media_2FDD2301_3D0B_717D_4197_D06BE21428E5_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"},{"media":"this.media_1C1D9327_3D37_5185_41C8_000196A76AAD","camera":"this.media_1C1D9327_3D37_5185_41C8_000196A76AAD_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"},{"media":"this.panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4","camera":"this.panorama_2232732B_3D35_518D_41A9_B1982FCCAEB4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}]},{"framerate":29.97,"id":"videores_1CA2F175_3D0D_D185_41A1_844D8CAE016B","type":"video/mp4","height":1920,"width":3840,"class":"Video360Resource","posterURL":trans('videores_1CA2F175_3D0D_D185_41A1_844D8CAE016B.posterURL'),"bitrate":17677,"url":trans('videores_1CA2F175_3D0D_D185_41A1_844D8CAE016B.url')},{"framerate":29.97,"id":"videores_1CA2D176_3D0D_D187_41C5_7CAF772D94A6","type":"video/mp4","height":2688,"width":5376,"class":"Video360Resource","posterURL":trans('videores_1CA2D176_3D0D_D187_41C5_7CAF772D94A6.posterURL'),"bitrate":34646,"url":trans('videores_1CA2D176_3D0D_D187_41C5_7CAF772D94A6.url')},{"framerate":29.97,"id":"videores_1F2AA369_3D15_518D_41AD_034229E79D1F","type":"video/mp4","height":1920,"width":3840,"class":"Video360Resource","posterURL":trans('videores_1F2AA369_3D15_518D_41AD_034229E79D1F.posterURL'),"bitrate":17677,"url":trans('videores_1F2AA369_3D15_518D_41AD_034229E79D1F.url')},{"framerate":29.97,"id":"videores_1F2B336A_3D15_518F_41C0_59DD2002E491","type":"video/mp4","height":2688,"width":5376,"class":"Video360Resource","posterURL":trans('videores_1F2B336A_3D15_518F_41C0_59DD2002E491.posterURL'),"bitrate":34646,"url":trans('videores_1F2B336A_3D15_518F_41C0_59DD2002E491.url')},{"id":"sequence_21E63D49_3D35_318D_41C5_94DF5BA9CB4F","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false}],"backgroundColorRatios":[0],"layout":"absolute","buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"width":"100%","backgroundColor":["#CC9933"],"toolTipHorizontalAlign":"center","paddingTop":0,"gap":10,"minHeight":20,"id":"rootPlayer","paddingBottom":0,"minWidth":20,"shadow":false,"scrollBarVisible":"rollOver","propagateClick":false,"scrollBarOpacity":0.5,"data":{"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"name":"Player486","textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"borderSize":0,"scrollBarWidth":10,"defaultVRPointer":"laser","contentOpaque":false,"height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.23.js.map
})();
//Generated with v2022.1.23, Wed Sep 14 2022