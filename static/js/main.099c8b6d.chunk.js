(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),r=(a(21),a(5)),n=a(3),i=(a(22),["home","personalInfo","experience","education","resume"]),l=(a(23),a.p+"static/media/redberry_logo.83180125.svg"),j=a.p+"static/media/round_logo.16277e36.svg",d=a.p+"static/media/Line.c89d13d3.svg",o=a(0);function b(e){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsxs)("div",{className:"images",children:[Object(o.jsx)("img",{src:l,alt:"Redberry",className:"redberry"}),Object(o.jsx)("img",{src:d,alt:"line",className:"underline"})]}),Object(o.jsxs)("div",{className:"start_photo",children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"start",onClick:function(){return e.setCurrentStep(i[1])},children:"\u10e0\u10d4\u10d6\u10d8\u10e3\u10db\u10d4\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0"})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:j,alt:"circle",className:"round_logo"})})]})]})}a(25);function u(e){var t=e.step,a=e.onPrev,c=e.onNext,s=i.slice(1,5).indexOf(t);return Object(o.jsxs)("div",{className:"step-buttons",children:[Object(o.jsx)("div",{children:a&&Object(o.jsx)("button",{onClick:a,className:"back",children:"\u10e3\u10d9\u10d0\u10dc"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:c,children:3===s?"\u1c93\u1c90\u1ca1\u1ca0\u1ca3\u1c9a\u1c94\u1c91\u1c90":"\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8"})})]})}a(26);var m=a.p+"static/media/invalid.3c18dc36.svg";function h(e){return Object(o.jsxs)("div",{className:"photo",children:[Object(o.jsx)("p",{children:"\u10de\u10d8\u10e0\u10d0\u10d3\u10d8 \u10e4\u10dd\u10e2\u10dd\u10e1 \u10d0\u10e2\u10d5\u10d8\u10e0\u10d7\u10d5\u10d0"}),Object(o.jsx)("input",{type:"file",id:"image",style:{display:"none"},onChange:function(t){var a=t.target.files[0];if(a){var c=new FileReader;c.onload=function(t){var c=t.target.result;e.onChange({name:a.name,contents:c})},c.readAsDataURL(a)}},accept:"image/*"}),Object(o.jsx)("label",{htmlFor:"image",style:{margin:0},children:"\u10d0\u10e2\u10d5\u10d8\u10e0\u10d7\u10d5\u10d0"}),e.imageError&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image",style:{position:"relative",top:"3px",margin:"0px",marginLeft:"15px"}})]})}a(27);var O=a.p+"static/media/valid.7e7d6c96.svg";function p(e){var t=s.a.useState(e.data.name||""),a=Object(n.a)(t,2),c=a[0],r=a[1],l=s.a.useState(!1),j=Object(n.a)(l,2),d=j[0],b=j[1],p=s.a.useState(!1),x=Object(n.a)(p,2),g=x[0],v=x[1],N=s.a.useState(e.data.surname||""),f=Object(n.a)(N,2),S=f[0],C=f[1],_=s.a.useState(!1),y=Object(n.a)(_,2),D=y[0],w=y[1],k=s.a.useState(!1),E=Object(n.a)(k,2),I=E[0],F=E[1],J=s.a.useState(e.data.email||""),$=Object(n.a)(J,2),q=$[0],P=$[1],R=s.a.useState(!1),z=Object(n.a)(R,2),A=z[0],B=z[1],L=s.a.useState(!1),W=Object(n.a)(L,2),Z=W[0],T=W[1],U=s.a.useState(e.data.phone_number||""),G=Object(n.a)(U,2),H=G[0],K=G[1],M=s.a.useState(!1),Q=Object(n.a)(M,2),V=Q[0],X=Q[1],Y=s.a.useState(!1),ee=Object(n.a)(Y,2),te=ee[0],ae=ee[1],ce=s.a.useState(e.data.image||{name:"",contents:""}),se=Object(n.a)(ce,2),re=se[0],ne=se[1],ie=s.a.useState(!1),le=Object(n.a)(ie,2),je=le[0],de=le[1],oe=s.a.useState(e.data.about_me||""),be=Object(n.a)(oe,2),ue=be[0],me=be[1];return Object(o.jsxs)("div",{className:"left",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"page-title",children:"\u10de\u10d8\u10e0\u10d0\u10d3\u10d8 \u10d8\u10dc\u10e4\u10dd"}),Object(o.jsx)("p",{children:"1/3"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsxs)("div",{className:"name_surname",children:[Object(o.jsxs)("div",{className:"name-inp",children:[Object(o.jsx)("label",{children:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:g?"correct":d?"error":"",placeholder:"\u10d0\u10dc\u10d6\u10dd\u10e0",value:c,onChange:function(t){r(t.target.value),e.handleCurrentStepDataChange({name:t.target.value})}}),g&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img"}),Object(o.jsx)("span",{children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10d0\u10e1\u10dd, \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"}),d&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image"})]}),Object(o.jsxs)("div",{className:"surname-inp",children:[Object(o.jsx)("label",{children:"\u10d2\u10d5\u10d0\u10e0\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:I?"correct":D?"error":"",placeholder:"\u10db\u10e3\u10db\u10da\u10d0\u10eb\u10d4",value:S,onChange:function(t){C(t.target.value),e.handleCurrentStepDataChange({surname:t.target.value})}}),I&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img"}),Object(o.jsx)("span",{children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10d0\u10e1\u10dd, \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"}),D&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image"})]})]}),Object(o.jsx)(h,{imageError:je,onChange:function(t){ne(t),e.handleCurrentStepDataChange({image:t})}}),Object(o.jsxs)("div",{className:"text_info",children:[Object(o.jsx)("p",{className:"question",children:"\u10e9\u10d4\u10db \u10e8\u10d4\u10e1\u10d0\u10ee\u10d4\u10d1 (\u10d0\u10e0\u10d0\u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd)"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{className:"general_info",placeholder:"\u10d6\u10dd\u10d2\u10d0\u10d3\u10d8 \u10d8\u10dc\u10e4\u10dd \u10e8\u10d4\u10dc \u10e8\u10d4\u10e1\u10d0\u10ee\u10d4\u10d1",value:ue,onChange:function(t){me(t.target.value),e.handleCurrentStepDataChange({about_me:t.target.value})}})]}),Object(o.jsxs)("div",{className:"email_block",children:[Object(o.jsx)("label",{children:"\u10d4\u10da.\u10e4\u10dd\u10e1\u10e2\u10d0"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:Z?"correct":A?"error":"",placeholder:"anzorr666@redberry.ge",value:q,onChange:function(t){P(t.target.value),e.handleCurrentStepDataChange({email:t.target.value})}}),Z&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{children:"\u10e3\u10dc\u10d3\u10d0 \u10db\u10d7\u10d0\u10d5\u10e0\u10d3\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 @redberry.ge-\u10d8\u10d7"}),A&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image1"})]}),Object(o.jsxs)("div",{className:"phone-number",children:[Object(o.jsx)("label",{children:"\u10db\u10dd\u10d1\u10d8\u10da\u10e3\u10e0\u10d8\u10e1 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:te?"correct":V?"error":"",placeholder:"+995 551 12 34 56",value:H,onChange:function(t){K(t.target.value),e.handleCurrentStepDataChange({phone_number:t.target.value})}}),Object(o.jsx)("span",{children:"\u10e3\u10dc\u10d3\u10d0 \u10d0\u10d9\u10db\u10d0\u10e7\u10dd\u10e4\u10d8\u10da\u10d4\u10d1\u10d3\u10d4\u10e1 \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10db\u10dd\u10d1\u10d8\u10da\u10e3\u10e0\u10d8\u10e1 \u10dc\u10dd\u10db\u10e0\u10d8\u10e1 \u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10e1"}),V&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image1"}),te&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"})]}),Object(o.jsx)(u,{step:i[1],onNext:function(){(function(){var e=!0;return!c.trim()||c.trim().length<2||!/^[\u10d0-\u10f0]+$/.test(c)?(b(!0),e=!1):c.trim()||c.trim().length>2||!/^[\u10d0-\u10f0]+$/.test(c)?(v(!0),b(!1)):b(!1),!S.trim()||S.trim().length<2||!/^[\u10d0-\u10f0]+$/.test(S)?(w(!0),e=!1):S.trim()||S.trim().length>2||!/^[\u10d0-\u10f0]+$/.test(S)?(F(!0),w(!1)):w(!1),q.trim()&&/^[A-Za-z0-9._%+-]+@redberry.ge$/.test(q)?q.trim()&&/^[A-Za-z0-9._%+-]+@redberry.ge$/.test(q)&&(T(!0),B(!1)):(B(!0),T(!1),e=!1),H.trim()&&13===H.trim().length&&H.trim().startsWith("+995")?H.trim()&&H.trim().startsWith("+995")&&(ae(!0),X(!1)):(X(!0),ae(!1),e=!1),re.contents?de(!1):(de(!0),e=!1),e})()&&e.handleStepChange({name:c,surname:S,email:q,phone_number:H,about_me:ue,image:re},i[2])}})]})]})}var x=a(14);a(17);function g(e){var t=s.a.useState(e.data.position||""),a=Object(n.a)(t,2),c=a[0],r=a[1],l=s.a.useState(!1),j=Object(n.a)(l,2),d=j[0],b=j[1],h=s.a.useState(!1),p=Object(n.a)(h,2),g=p[0],v=p[1],N=s.a.useState(e.data.employer||""),f=Object(n.a)(N,2),S=f[0],C=f[1],_=s.a.useState(!1),y=Object(n.a)(_,2),D=y[0],w=y[1],k=s.a.useState(!1),E=Object(n.a)(k,2),I=E[0],F=E[1],J=s.a.useState(e.data.positionStartDate||""),$=Object(n.a)(J,2),q=$[0],P=$[1],R=s.a.useState(!1),z=Object(n.a)(R,2),A=z[0],B=z[1],L=s.a.useState(!1),W=Object(n.a)(L,2),Z=W[0],T=W[1],U=s.a.useState(e.data.positionEndDate||""),G=Object(n.a)(U,2),H=G[0],K=G[1],M=s.a.useState(!1),Q=Object(n.a)(M,2),V=Q[0],X=Q[1],Y=s.a.useState(!1),ee=Object(n.a)(Y,2),te=ee[0],ae=ee[1],ce=s.a.useState(e.data.description||""),se=Object(n.a)(ce,2),re=se[0],ne=se[1],ie=s.a.useState(!1),le=Object(n.a)(ie,2),je=le[0],de=le[1],oe=s.a.useState(!1),be=Object(n.a)(oe,2),ue=be[0],me=be[1],he=s.a.useState(e.data.experiences||[]),Oe=Object(n.a)(he,2),pe=Oe[0],xe=Oe[1],ge=function(){var e=!0;return!c.trim()||c.trim().length<2?(b(!0),e=!1):c.trim()||c.trim().length>2?v(!0):b(!1),!S.trim()||S.trim().length<2?(w(!0),e=!1):S.trim()||S.trim().length>2?F(!0):w(!1),q.trim()?q.trim()?T(!0):B(!1):(B(!0),e=!1),H.trim()?H.trim()?ae(!0):X(!1):(X(!0),e=!1),re.trim()?re.trim()?me(!0):de(!1):(de(!0),e=!1),e};return Object(o.jsxs)("div",{className:"left",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"page-title",children:"\u10d2\u10d0\u10db\u10dd\u10ea\u10d3\u10d8\u10da\u10d4\u10d1\u10d0"}),Object(o.jsx)("p",{children:"2/3"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"form-container",children:[pe.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"position",children:[Object(o.jsx)("label",{children:"\u10d7\u10d0\u10dc\u10d0\u10db\u10d3\u10d4\u10d1\u10dd\u10d1\u10d0"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"correct",placeholder:"\u10d3\u10d4\u10d5\u10d4\u10da\u10dd\u10de\u10d4\u10e0\u10d8, \u10d3\u10d8\u10d6\u10d0\u10d8\u10dc\u10d4\u10e0\u10d8, \u10d0.\u10e8.",value:e.position,onChange:function(){}}),Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{className:"error",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"})]}),Object(o.jsxs)("div",{className:"employer",children:[Object(o.jsx)("label",{children:"\u10d3\u10d0\u10db\u10e1\u10d0\u10e5\u10db\u10d4\u10d1\u10d4\u10da\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"correct",placeholder:"\u10d3\u10d0\u10db\u10e1\u10d0\u10e5\u10db\u10d4\u10d1\u10d4\u10da\u10d8",value:e.employer,onChange:function(){}}),Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{className:"error",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"})]}),Object(o.jsxs)("div",{className:"name_surname",children:[Object(o.jsxs)("div",{className:"name-inp",children:[Object(o.jsx)("label",{children:"\u10d3\u10d0\u10ec\u10e7\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"correct",placeholder:"Date",type:"date",value:e.start_date,onChange:function(){}})]}),Object(o.jsxs)("div",{className:"end-date",children:[Object(o.jsx)("label",{children:" \u10d3\u10d0\u10db\u10d7\u10d0\u10d5\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"correct",type:"date",placeholder:"Date",value:e.end_date,onChange:function(){}})]})]}),Object(o.jsxs)("div",{className:"text_info",children:[Object(o.jsx)("p",{className:"question",children:"\u10d0\u10e6\u10ec\u10d4\u10e0\u10d0"}),Object(o.jsx)("textarea",{className:"correct",placeholder:"\u10e0\u10dd\u10da\u10d8 \u10d7\u10d0\u10dc\u10d0\u10db\u10d3\u10d4\u10d1\u10dd\u10d1\u10d0\u10d6\u10d4 \u10d3\u10d0 \u10d6\u10dd\u10d2\u10d0\u10d3\u10d8 \u10d0\u10e6\u10ec\u10d4\u10e0\u10d0",value:e.description,onChange:function(){}})]}),Object(o.jsx)("hr",{className:"experience-hr"})]},e.employer)})),Object(o.jsxs)("div",{className:"position",children:[Object(o.jsx)("label",{children:"\u10d7\u10d0\u10dc\u10d0\u10db\u10d3\u10d4\u10d1\u10dd\u10d1\u10d0"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:g?"correct":d?"error":"",placeholder:"\u10d3\u10d4\u10d5\u10d4\u10da\u10dd\u10de\u10d4\u10e0\u10d8, \u10d3\u10d8\u10d6\u10d0\u10d8\u10dc\u10d4\u10e0\u10d8, \u10d0.\u10e8.",value:c,onChange:function(t){r(t.target.value),e.handleCurrentStepDataChange({position:t.target.value})}}),g&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{className:"error",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"}),d&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image1"})]}),Object(o.jsxs)("div",{className:"employer",children:[Object(o.jsx)("label",{children:"\u10d3\u10d0\u10db\u10e1\u10d0\u10e5\u10db\u10d4\u10d1\u10d4\u10da\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:I?"correct":D?"error":"",placeholder:"\u10d3\u10d0\u10db\u10e1\u10d0\u10e5\u10db\u10d4\u10d1\u10d4\u10da\u10d8",value:S,onChange:function(t){C(t.target.value),e.handleCurrentStepDataChange({employer:t.target.value})}}),I&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{className:"error",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"}),D&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image1"})]}),Object(o.jsxs)("div",{className:"name_surname",children:[Object(o.jsxs)("div",{className:"name-inp",children:[Object(o.jsx)("label",{children:"\u10d3\u10d0\u10ec\u10e7\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:Z?"correct":A?"error":"",placeholder:"Date",type:"date",value:q,onChange:function(t){P(t.target.value),e.handleCurrentStepDataChange({positionStartDate:t.target.value})}})]}),Object(o.jsxs)("div",{className:"end-date",children:[Object(o.jsx)("label",{children:" \u10d3\u10d0\u10db\u10d7\u10d0\u10d5\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:te?"correct":V?"error":"",type:"date",placeholder:"Date",value:H,onChange:function(t){K(t.target.value),e.handleCurrentStepDataChange({positionEndDate:t.target.value})}})]})]}),Object(o.jsxs)("div",{className:"text_info",children:[Object(o.jsx)("p",{className:"question",children:"\u10d0\u10e6\u10ec\u10d4\u10e0\u10d0"}),Object(o.jsx)("textarea",{className:ue?"correct":je?"error":"",placeholder:"\u10e0\u10dd\u10da\u10d8 \u10d7\u10d0\u10dc\u10d0\u10db\u10d3\u10d4\u10d1\u10dd\u10d1\u10d0\u10d6\u10d4 \u10d3\u10d0 \u10d6\u10dd\u10d2\u10d0\u10d3\u10d8 \u10d0\u10e6\u10ec\u10d4\u10e0\u10d0",value:re,onChange:function(t){ne(t.target.value),e.handleCurrentStepDataChange({description:t.target.value})}})]}),Object(o.jsx)("hr",{className:"experience-hr"}),Object(o.jsx)("button",{className:"add-new-button",onClick:function(){if(ge()){var t=[].concat(Object(x.a)(pe),[{position:c,employer:S,start_date:q,end_date:H,description:re}]);xe(t),e.handleCurrentStepDataChange({experiences:t,position:"",employer:"",description:"",positionStartDate:"",positionEndDate:""}),r(""),b(!1),v(!1),C(""),w(!1),F(!1),P(""),B(!1),T(!1),K(""),X(!1),ae(!1),ne(""),de(!1),me(!1)}},children:"\u10db\u10d4\u10e2\u10d8 \u10d2\u10d0\u10db\u10dd\u10ea\u10d3\u10d8\u10da\u10d4\u10d1\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0"}),Object(o.jsx)(u,{step:i[2],onPrev:function(){return e.setCurrentStep(i[1])},onNext:function(){(!pe.length||c||S||re||q||H)&&!ge()||e.handleStepChange({experiences:pe},i[3])}})]})]})}function v(e){var t=s.a.useState(e.data.institute||""),a=Object(n.a)(t,2),c=a[0],r=a[1],l=s.a.useState(!1),j=Object(n.a)(l,2),d=j[0],b=j[1],h=s.a.useState(!1),p=Object(n.a)(h,2),g=p[0],v=p[1],N=s.a.useState(e.data.degree||{degree_id:"",title:""}),f=Object(n.a)(N,2),S=f[0],C=f[1],_=s.a.useState(!1),y=Object(n.a)(_,2),D=y[0],w=y[1],k=s.a.useState(!1),E=Object(n.a)(k,2),I=E[0],F=E[1],J=s.a.useState(e.data.due_date||""),$=Object(n.a)(J,2),q=$[0],P=$[1],R=s.a.useState(!1),z=Object(n.a)(R,2),A=z[0],B=z[1],L=s.a.useState(!1),W=Object(n.a)(L,2),Z=W[0],T=W[1],U=s.a.useState(e.data.description||""),G=Object(n.a)(U,2),H=G[0],K=G[1],M=s.a.useState(!1),Q=Object(n.a)(M,2),V=Q[0],X=Q[1],Y=s.a.useState(!1),ee=Object(n.a)(Y,2),te=ee[0],ae=ee[1],ce=s.a.useState([]),se=Object(n.a)(ce,2),re=se[0],ne=se[1],ie=s.a.useState(e.data.educations||[]),le=Object(n.a)(ie,2),je=le[0],de=le[1];s.a.useEffect((function(){fetch("https://resume.redberryinternship.ge/api/degrees").then((function(e){return e.json()})).then((function(e){ne(e)})).catch((function(e){console.log(e)}))}),[]);var oe=function(){var e=!0;return!c.trim()||c.trim().length<2?(b(!0),v(!1),e=!1):c.trim()&&c.trim().length>2&&(v(!0),b(!1)),S.degree_id.trim()?(F(!0),w(!1)):(w(!0),F(!1),e=!1),q.trim()?(B(!1),T(!0)):(B(!0),T(!1),e=!1),H.trim()?H.trim()?ae(!0):X(!1):(X(!0),e=!1),e};return Object(o.jsxs)("div",{className:"left",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"page-title",children:"\u10d2\u10d0\u10dc\u10d0\u10d7\u10da\u10d4\u10d1\u10d0"}),Object(o.jsx)("p",{children:"3/3"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"form-container",children:[je.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"position",children:[Object(o.jsx)("label",{children:"\u10e1\u10d0\u10e1\u10ec\u10d0\u10d5\u10da\u10d4\u10d1\u10d4\u10da\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"correct",placeholder:"\u10e1\u10d0\u10e1\u10ec\u10d0\u10d5\u10da\u10d4\u10d1\u10d4\u10da\u10d8",value:e.institute,onChange:function(){}}),Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{className:"error",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"})]}),Object(o.jsxs)("div",{className:"name_surname",children:[Object(o.jsxs)("div",{className:"name-inp",children:[Object(o.jsx)("label",{children:"\u10ee\u10d0\u10e0\u10d8\u10e1\u10ee\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsxs)("select",{className:"correct",value:e.degree.degree_id,onChange:function(e){return C(e.target.value)},children:[Object(o.jsx)("option",{value:"placeholder",children:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7 \u10ee\u10d0\u10e0\u10d8\u10e1\u10ee\u10d8"}),re.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.title},e.id)}))]})]}),Object(o.jsxs)("div",{className:"end-date",children:[Object(o.jsx)("label",{children:"\u10d3\u10d0\u10db\u10d7\u10d0\u10d5\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"correct",type:"date",placeholder:"Date",value:e.due_date,onChange:function(){}})]})]}),Object(o.jsxs)("div",{className:"text_info",children:[Object(o.jsx)("p",{className:"question",children:"\u10d0\u10e6\u10ec\u10d4\u10e0\u10d0"}),Object(o.jsx)("textarea",{className:"correct",placeholder:"\u10e0\u10dd\u10da\u10d8 \u10d7\u10d0\u10dc\u10d0\u10db\u10d3\u10d4\u10d1\u10dd\u10d1\u10d0\u10d6\u10d4 \u10d3\u10d0 \u10d6\u10dd\u10d2\u10d0\u10d3\u10d8 \u10d0\u10e6\u10ec\u10d4\u10e0\u10d0",value:e.description,onChange:function(){}})]}),Object(o.jsx)("hr",{className:"experience-hr"})]},e.institute)})),Object(o.jsxs)("div",{className:"position",children:[Object(o.jsx)("label",{children:"\u10e1\u10d0\u10e1\u10ec\u10d0\u10d5\u10da\u10d4\u10d1\u10d4\u10da\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:g?"correct":d?"error":"",placeholder:"\u10e1\u10d0\u10e1\u10ec\u10d0\u10d5\u10da\u10d4\u10d1\u10d4\u10da\u10d8",value:c,onChange:function(t){r(t.target.value),e.handleCurrentStepDataChange({institute:t.target.value})}}),g&&Object(o.jsx)("img",{src:O,alt:"wrong",className:"correct-img1"}),Object(o.jsx)("span",{className:"error",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"}),d&&Object(o.jsx)("img",{src:m,alt:"wrong",className:"error-image1"})]}),Object(o.jsxs)("div",{className:"name_surname",children:[Object(o.jsxs)("div",{className:"name-inp",children:[Object(o.jsx)("label",{children:"\u10ee\u10d0\u10e0\u10d8\u10e1\u10ee\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsxs)("select",{className:I?"correct":D?"error":"",value:S.degree_id,onChange:function(t){var a=re.find((function(e){return e.id==t.target.value}));C({degree_id:"".concat(a.id),title:a.title}),e.handleCurrentStepDataChange({degree_id:"".concat(a.id),title:a.title})},children:[Object(o.jsx)("option",{value:"placeholder",children:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7 \u10ee\u10d0\u10e0\u10d8\u10e1\u10ee\u10d8"}),re.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.title},e.id)}))]})]}),Object(o.jsxs)("div",{className:"end-date",children:[Object(o.jsx)("label",{children:" \u10d3\u10d0\u10db\u10d7\u10d0\u10d5\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:Z?"correct":A?"error":"",type:"date",placeholder:"Date",value:q,onChange:function(t){P(t.target.value),e.handleCurrentStepDataChange({due_date:t.target.value})}})]})]}),Object(o.jsxs)("div",{className:"text_info",children:[Object(o.jsx)("p",{className:"question",children:"\u10d0\u10e6\u10ec\u10d4\u10e0\u10d0"}),Object(o.jsx)("textarea",{className:te?"correct":V?"error":"",placeholder:"\u10e0\u10dd\u10da\u10d8 \u10d7\u10d0\u10dc\u10d0\u10db\u10d3\u10d4\u10d1\u10dd\u10d1\u10d0\u10d6\u10d4 \u10d3\u10d0 \u10d6\u10dd\u10d2\u10d0\u10d3\u10d8 \u10d0\u10e6\u10ec\u10d4\u10e0\u10d0",value:H,onChange:function(t){K(t.target.value),e.handleCurrentStepDataChange({description:t.target.value})}})]}),Object(o.jsx)("hr",{className:"experience-hr"}),Object(o.jsx)("button",{className:"add-new-button",onClick:function(){if(oe()){var t=[].concat(Object(x.a)(je),[{institute:c,degree:S,due_date:q,description:H}]);de(t),e.handleCurrentStepDataChange({educations:t,institute:"",degree:{degree_id:"",title:""},due_date:"",description:""}),r(""),b(!1),v(!1),C({degree_id:"",title:""}),w(!1),F(!1),P(""),B(!1),T(!1),K(""),X(!1),ae(!1)}},children:"\u10e1\u10ee\u10d5\u10d0 \u10e1\u10d0\u10e1\u10ec\u10d0\u10d5\u10da\u10d4\u10d1\u10da\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0"}),Object(o.jsx)(u,{step:i[3],onPrev:function(){return e.setCurrentStep(i[2])},onNext:function(){(!je.length||c||S||q||H)&&oe()||e.handleStepChange({educations:je},i[4])}})]})]})}var N=a.p+"static/media/at-symbol.ae1e57e4.svg",f=a.p+"static/media/phone.094b9b6d.svg",S=(a(28),a.p+"static/media/round-red-logo.f6f9be1d.svg");function C(e){return Object(o.jsxs)("div",{className:"cv-with-frame",style:e.withBorder?{border:"0.8px solid #000000"}:{},children:[(e.data.name||e.data.surname||e.data.email||e.data.phone_number||e.data.about_me||e.data.image)&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"about",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"name",children:[e.data.name," ",e.data.surname]}),e.data.email&&Object(o.jsxs)("div",{className:"contacts",children:[Object(o.jsx)("img",{src:N}),Object(o.jsx)("p",{children:e.data.email})]}),e.data.phone_number&&Object(o.jsxs)("div",{className:"contacts",children:[Object(o.jsx)("img",{src:f}),Object(o.jsx)("p",{children:e.data.phone_number})]}),e.data.about_me&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"\u10e9\u10d4\u10db \u10e8\u10d4\u10e1\u10d0\u10ee\u10d4\u10d1"}),Object(o.jsx)("p",{className:"description",children:e.data.about_me})]})]}),e.data.image&&Object(o.jsx)("img",{src:e.data.image.contents,className:"profile-photo"})]}),Object(o.jsx)("hr",{})]}),e.data.experiences&&!!e.data.experiences.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"\u10d2\u10d0\u10db\u10dd\u10ea\u10d3\u10d8\u10da\u10d4\u10d1\u10d0"}),e.data.experiences.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("p",{className:"item-title",children:[e.position,", ",e.employer]}),Object(o.jsxs)("h5",{className:"dates",children:[e.start_date," - ",e.end_date]}),Object(o.jsx)("p",{className:"description",children:e.description})]},e.employer)})),Object(o.jsx)("hr",{})]}),e.data.educations&&!!e.data.educations.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"\u10d2\u10d0\u10dc\u10d0\u10d7\u10da\u10d4\u10d1\u10d0"}),e.data.educations.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("p",{className:"item-title",children:[e.institute,", ",e.degree.title]}),Object(o.jsx)("h5",{className:"dates",children:e.due_date}),Object(o.jsx)("p",{className:"description",children:e.description})]},e.institute)})),Object(o.jsx)("hr",{})]}),Object(o.jsx)("img",{src:S,className:"red-circle-resume"})]})}var _=a(16),y=a(18),D=a(43),w=(a(29),a.p+"static/media/close.66d47612.svg");function k(e){var t=s.a.useState(!1),a=Object(n.a)(t,2),c=a[0],i=a[1],l=function(){var t=Object(y.a)(Object(_.a)().mark((function t(){var a,c,s,n,l;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.data.image.contents);case 2:return a=t.sent,t.next=5,a.blob();case 5:for(l in c=t.sent,s=Object(r.a)(Object(r.a)({},e.data),{},{educations:e.data.educations.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{degree_id:e.degree.degree_id})})),experiences:e.data.experiences.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{due_date:e.end_date})})),image:c}),n=new FormData,s)s.hasOwnProperty(l)&&n.append(l,s[l]);s.experiences.forEach((function(e,t){n.append("experiences[".concat(t,"][position]"),e.position),n.append("experiences[".concat(t,"][employer]"),e.employer),n.append("experiences[".concat(t,"][start_date]"),e.start_date),n.append("experiences[".concat(t,"][due_date]"),e.due_date),n.append("experiences[".concat(t,"][description]"),e.position)})),s.educations.forEach((function(e,t){n.append("educations[".concat(t,"][institute]"),e.institute),n.append("educations[".concat(t,"][degree_id]"),e.degree_id),n.append("educations[".concat(t,"][due_date]"),e.due_date),n.append("educations[".concat(t,"][description]"),e.position)})),D.a.post("https://resume.redberryinternship.ge/api/cvs",n).then((function(){i(!0)}));case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return s.a.useEffect((function(){l()}),[]),Object(o.jsxs)("div",{className:"final-page",children:[Object(o.jsx)(C,{data:e.data,withBorder:!0}),c&&Object(o.jsxs)("div",{className:"successfully-sent",children:[Object(o.jsx)("p",{children:"\u10e0\u10d4\u10d6\u10d8\u10e3\u10db\u10d4 \u10ec\u10d0\u10e0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10d7 \u10d2\u10d0\u10d8\u10d2\u10d6\u10d0\u10d5\u10dc\u10d0 \ud83c\udf89"}),Object(o.jsx)("img",{src:w,onClick:function(){i(!1)}})]})]})}var E=a.p+"static/media/arrow.83a1615e.svg";function I(){var e=Object(c.useState)(localStorage.getItem("currentStep")||i[0]),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(JSON.parse(localStorage.getItem("data")||"{}")),j=Object(n.a)(l,2),d=j[0],u=j[1],m=Object(c.useState)(JSON.parse(localStorage.getItem("currentStepDate")||"{}")),h=Object(n.a)(m,2),O=h[0],x=h[1],N=function(e,t){u(Object(r.a)(Object(r.a)({},d),e)),s(t),x({})},f=function(e){x(Object(r.a)(Object(r.a)({},O),e))};Object(c.useEffect)((function(){localStorage.setItem("currentStepDate",JSON.stringify(O))}),[O]),Object(c.useEffect)((function(){localStorage.setItem("data",JSON.stringify(d))}),[d]),Object(c.useEffect)((function(){localStorage.setItem("currentStep",a)}),[a]);var S=null;switch(a){case i[1]:S=Object(o.jsx)(p,{data:Object(r.a)(Object(r.a)({},d),O),handleStepChange:N,setCurrentStep:s,handleCurrentStepDataChange:f});break;case i[2]:S=Object(o.jsx)(g,{data:Object(r.a)(Object(r.a)({},d),O),handleStepChange:N,setCurrentStep:s,handleCurrentStepDataChange:f});break;case i[3]:S=Object(o.jsx)(v,{data:Object(r.a)(Object(r.a)({},d),O),handleStepChange:N,setCurrentStep:s,handleCurrentStepDataChange:f});break;case i[4]:S=Object(o.jsx)(k,{data:d,handleStepChange:N,setCurrentStep:s,handleCurrentStepDataChange:f});break;default:S=Object(o.jsx)(b,{setCurrentStep:s})}var _=[i[1],i[2],i[3]].includes(a);return Object(o.jsxs)("div",{className:"main",style:_?{display:"grid",gridTemplateColumns:"auto 822px"}:{display:"flex",justifyContent:"center"},children:[S,_&&Object(o.jsx)(C,{data:Object(r.a)(Object(r.a)({},d),O)}),a!==i[0]&&Object(o.jsx)("img",{src:E,className:"reset-button",alr:"back",onClick:function(){s(i[0]),u({}),x({})}})]})}var F=a(19),J=document.getElementById("root");Object(F.createRoot)(J).render(Object(o.jsx)(I,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.099c8b6d.chunk.js.map