
const ROUTINE=[
{day:"Lunes",short:"Upper",focus:"Torso completo",ex:[
["Press banca con barra","3 × 6–8","2–3 min","Pecho","press",["Escápulas atrás y abajo.","Pies firmes en el suelo.","Baja la barra con control."]],
["Jalón al pecho","3 × 8–10","2 min","Espalda","pulldown",["Pecho ligeramente elevado.","Lleva los codos hacia abajo.","No tires con impulso."]],
["Press inclinado con mancuernas","2 × 8–10","2 min","Pecho superior","incline",["Banco a inclinación moderada.","Muñecas sobre los codos.","Controla la bajada."]],
["Remo sentado en polea","3 × 8–10","2 min","Espalda","row",["Torso estable.","Tira hacia el abdomen.","Junta las escápulas."]],
["Elevaciones laterales","2 × 12–15","60–90 s","Hombros","lateral",["Codos ligeramente flexionados.","Sube hasta cerca de la línea del hombro.","Evita balancearte."]],
["Curl de bíceps","2 × 10–12","60–90 s","Bíceps","curl",["Codos pegados al cuerpo.","No uses impulso.","Aprieta arriba."]],
["Extensión de tríceps en polea","2 × 10–12","60–90 s","Tríceps","pushdown",["Codos quietos.","Extiende completamente sin balancearte.","Controla el regreso."]]]},
{day:"Martes",short:"Lower",focus:"Pierna completa",ex:[
["Prensa","3 × 8–10","2–3 min","Cuádriceps / glúteos","legpress",["Espalda apoyada.","Rodillas siguen la línea de los pies.","No bloquees agresivamente las rodillas."]],
["Hip thrust","3 × 8–10","2 min","Glúteos","hip",["Mentón ligeramente recogido.","Empuja con los talones.","Pausa arriba sin hiperextender la espalda."]],
["Curl femoral sentado","3 × 10–12","90 s","Isquiotibiales","legcurl",["Ajusta el respaldo correctamente.","Flexiona sin despegarte del asiento.","Regresa lento."]],
["Extensión de cuádriceps","2 × 10–15","90 s","Cuádriceps","legext",["Alinea la rodilla con el eje.","Extiende con control.","No rebotes."]],
["Aductores","2 × 12–15","60–90 s","Aductores","adductor",["Espalda apoyada.","Cierra con control.","Evita golpear las placas."]],
["Pantorrillas","3 × 10–15","60–90 s","Gemelos","calf",["Baja el talón por completo.","Sube hasta la punta.","Pausa arriba."]]]},
{day:"Miércoles",short:"Push",focus:"Pecho · hombros · tríceps",ex:[
["Press banca","3 × 6–8","2–3 min","Pecho","press",["Escápulas atrás y abajo.","Pies firmes.","Controla cada repetición."]],
["Press inclinado con mancuernas","3 × 8–10","2 min","Pecho superior","incline",["Inclinación moderada.","Evita chocar las mancuernas.","Baja con control."]],
["Press de hombros en máquina","3 × 8–10","2 min","Hombros","shoulderpress",["Ajusta el asiento.","No arquees demasiado la espalda.","Empuja sin bloquear agresivamente."]],
["Peck Deck","2 × 10–15","90 s","Pecho","pecdeck",["Pecho elevado.","Codos estables.","Aprieta al cerrar."]],
["Elevaciones laterales","3 × 12–15","60–90 s","Hombros","lateral",["Sube con los codos.","Usa carga controlable.","Evita balancearte."]],
["Tríceps con cuerda","2 × 10–12","90 s","Tríceps","rope",["Codos quietos.","Separa la cuerda abajo.","Regresa lento."]],
["Tríceps sobre la cabeza","2 × 10–12","90 s","Tríceps","overhead",["Mantén los codos orientados al frente.","Estira bien el tríceps.","Evita arquear la espalda."]]]},
{day:"Jueves",short:"Pull",focus:"Espalda · bíceps",ex:[
["Jalón al pecho","3 × 8–10","2 min","Espalda","pulldown",["Pecho elevado.","Codos hacia abajo.","Sin impulso."]],
["Remo sentado en polea","3 × 8–10","2 min","Espalda","row",["Torso estable.","Tira hacia el abdomen.","Aprieta la espalda."]],
["Remo unilateral","2 × 10–12","90–120 s","Espalda","onearm",["Espalda neutra.","Codo hacia la cadera.","No gires el torso."]],
["Pullover en polea","2 × 10–15","90 s","Dorsales","pullover",["Brazos casi rectos.","Lleva la barra hacia los muslos.","No conviertas el movimiento en tríceps."]],
["Face pull","2 × 12–15","60–90 s","Deltoide posterior","facepull",["Tira hacia la cara.","Codos altos.","Controla el regreso."]],
["Curl predicador","3 × 8–12","90 s","Bíceps","preacher",["Brazo apoyado.","No levantes el hombro.","Extiende sin perder tensión."]],
["Curl martillo","2 × 10–12","90 s","Bíceps / braquial","hammer",["Agarre neutro.","Codos quietos.","Sin balanceo."]]]},
{day:"Viernes",short:"Legs",focus:"Pierna completa",ex:[
["Hack squat","3 × 8–10","2–3 min","Cuádriceps / glúteos","hack",["Espalda apoyada.","Rodillas siguen los pies.","Baja solo hasta donde mantengas control."]],
["Prensa","2 × 10–12","2 min","Cuádriceps / glúteos","legpress",["Espalda apoyada.","Pies firmes.","Controla la profundidad."]],
["Curl femoral acostado","3 × 10–12","90 s","Isquiotibiales","lyingcurl",["Cadera apoyada.","Flexiona con control.","No levantes la pelvis."]],
["Zancadas","2 × 10 / pierna","90–120 s","Piernas / glúteos","lunge",["Paso estable.","Rodilla alineada.","Torso controlado."]],
["Extensión de cuádriceps","2 × 12–15","90 s","Cuádriceps","legext",["Alinea la rodilla.","Sube controlado.","Baja lento."]],
["Abductores","2 × 12–15","60–90 s","Glúteo medio","abductor",["Espalda estable.","Abre con control.","No rebotes."]],
["Pantorrillas","3 × 10–15","60–90 s","Gemelos","calf",["Recorrido completo.","Pausa arriba.","Baja lento."]]]}
];

const $=s=>document.querySelector(s);
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
let currentDay=Math.min(Math.max(new Date().getDay()-1,0),4), workoutStarted=false, timerInterval=null,timerSeconds=0;

function art(type){
 const g='#54e596',w='#d7e1e8',m='#657585';
 const line=(d,c=g,sw=5)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
 const head=`<circle cx="70" cy="28" r="10" fill="${w}"/>`;
 const floor=line("M18 110 H122",m,3);
 let b="";
 if(type==="press") b=head+line("M66 41 L54 65 L84 70 M55 52 L35 48 M70 50 L101 45 M54 65 L35 86 M82 70 L104 87")+line("M22 40 H118",w,4)+line("M28 33 V47 M112 33 V47",w,4)+line("M20 90 H121",m,4);
 else if(type==="incline") b=head+line("M62 41 L50 63 L80 72 M53 51 L34 43 M68 49 L96 38 M51 63 L38 88 M78 72 L100 88")+line("M18 92 L84 63",m,5)+`<circle cx="28" cy="39" r="7" fill="${w}"/><circle cx="102" cy="35" r="7" fill="${w}"/>`;
 else if(type==="pulldown") b=head+line("M70 40 L70 70 M70 49 L42 24 M70 49 L98 24 M70 70 L53 99 M70 70 L87 99")+line("M25 16 H115",w,4)+line("M36 12 V21 M104 12 V21",w,3);
 else if(type==="row") b=head+line("M64 42 L49 65 L82 68 M50 57 L95 52 M49 65 L37 93 M80 68 L93 94")+line("M96 52 H122",w,4)+floor;
 else if(type==="onearm") b=head+line("M67 42 L52 61 L88 66 M55 55 L35 72 M69 54 L101 60 M52 61 L42 94 M86 66 L103 94")+`<circle cx="108" cy="61" r="7" fill="${w}"/>`+floor;
 else if(type==="lateral") b=head+line("M70 40 L70 70 M70 48 L32 48 M70 48 L108 48 M70 70 L54 100 M70 70 L86 100")+`<circle cx="25" cy="48" r="7" fill="${w}"/><circle cx="115" cy="48" r="7" fill="${w}"/>`+floor;
 else if(type==="curl"||type==="hammer"||type==="preacher") b=head+line("M70 40 L70 70 M70 48 L50 64 L37 53 M70 48 L90 64 L103 53 M70 70 L55 100 M70 70 L85 100")+`<circle cx="32" cy="49" r="7" fill="${w}"/><circle cx="108" cy="49" r="7" fill="${w}"/>`+floor;
 else if(type==="pushdown"||type==="rope") b=head+line("M70 40 L70 70 M70 48 L52 58 L52 85 M70 48 L88 58 L88 85 M70 70 L55 100 M70 70 L85 100")+line("M42 87 H98",w,4)+floor;
 else if(type==="overhead") b=head+line("M70 40 L70 70 M70 48 L57 38 L58 17 M70 48 L83 38 L82 17 M70 70 L55 100 M70 70 L85 100")+line("M55 13 H85",w,4)+floor;
 else if(type==="shoulderpress") b=head+line("M70 40 L70 70 M70 48 L45 33 M70 48 L95 33 M70 70 L55 100 M70 70 L85 100")+`<circle cx="38" cy="29" r="7" fill="${w}"/><circle cx="102" cy="29" r="7" fill="${w}"/>`+floor;
 else if(type==="pecdeck") b=head+line("M70 40 L70 70 M70 48 L46 46 M70 48 L94 46 M70 70 L55 100 M70 70 L85 100")+line("M26 25 V77 M114 25 V77",m,4)+floor;
 else if(type==="legpress") b=head+line("M54 48 L73 63 L90 80 M73 63 L51 78 M90 80 L110 68 M50 78 L33 96")+line("M106 46 L122 72",w,5)+line("M103 42 L120 33",m,5)+floor;
 else if(type==="hip") b=head+line("M56 46 L79 60 L101 69 M79 60 L55 80 M100 69 L119 72 M55 80 L36 96")+line("M20 73 H116",w,4)+floor;
 else if(type==="legcurl"||type==="lyingcurl") b=head+line("M49 50 L76 58 L98 63 M76 58 L56 77 M98 63 L112 83")+line("M22 87 H118",m,4)+floor;
 else if(type==="legext") b=head+line("M60 43 L60 70 M60 70 L82 77 L111 77 M60 50 L42 61")+line("M37 78 H73",m,4)+floor;
 else if(type==="adductor"||type==="abductor") b=head+line("M70 40 L70 69 M70 69 L48 91 M70 69 L92 91 M70 48 L52 58 M70 48 L88 58")+line("M36 92 H104",m,4)+floor;
 else if(type==="calf") b=head+line("M70 40 L70 69 M70 48 L50 58 M70 48 L90 58 M70 69 L57 94 M70 69 L83 94")+line("M45 103 H95",m,4)+line("M57 94 Q59 84 65 80 M83 94 Q81 84 75 80")+floor;
 else if(type==="hack") b=head+line("M70 40 L70 60 L88 76 M70 60 L49 77 M49 77 L37 99 M88 76 L105 99 M70 48 L48 42 M70 48 L92 42")+line("M29 38 H111",w,4)+line("M25 18 L40 104 M115 18 L100 104",m,4);
 else if(type==="lunge") b=head+line("M70 40 L70 65 M70 49 L50 55 M70 49 L90 55 M70 65 L44 82 L29 102 M70 65 L92 78 L115 78")+`<circle cx="44" cy="57" r="6" fill="${w}"/><circle cx="96" cy="57" r="6" fill="${w}"/>`+floor;
 else if(type==="pullover") b=head+line("M70 40 L70 70 M70 48 L46 26 M70 48 L94 26 M70 70 L55 100 M70 70 L85 100")+line("M28 18 H112",m,4)+floor;
 else if(type==="facepull") b=head+line("M70 40 L70 70 M70 50 L47 39 M70 50 L93 39 M47 39 L30 49 M93 39 L110 49 M70 70 L55 100 M70 70 L85 100")+line("M18 50 H31",w,4)+floor;
 else b=head+line("M70 40 L70 70 M70 48 L50 58 M70 48 L90 58 M70 70 L55 100 M70 70 L85 100")+floor;
 return `<svg viewBox="0 0 140 120" aria-hidden="true"><rect width="140" height="120" rx="18" fill="transparent"/>${b}</svg>`;
}

function setCount(s){return parseInt(s)||3}
function currentWeekLabel(){
 const d=new Date(), mon=new Date(d); mon.setDate(d.getDate()-((d.getDay()+6)%7));
 const sun=new Date(mon); sun.setDate(mon.getDate()+6);
 return `${mon.getDate()}–${sun.getDate()} ${sun.toLocaleDateString("es-CR",{month:"short"})}`;
}
function renderHome(){
 $("#weekLabel").textContent=currentWeekLabel();
 const hist=load("history",[]), thisWeek=new Date(); thisWeek.setHours(0,0,0,0); thisWeek.setDate(thisWeek.getDate()-((thisWeek.getDay()+6)%7));
 const doneDays=new Set(hist.filter(x=>new Date(x.date)>=thisWeek).map(x=>x.day));
 $("#weeklyDone").textContent=`${doneDays.size}/5`;
 $("#weekGrid").innerHTML="";
 ROUTINE.forEach((d,i)=>{
   const b=document.createElement("button"); b.className="day"+(new Date().getDay()-1===i?" today":"")+(doneDays.has(d.day)?" done":"");
   b.innerHTML=`<b>${d.day.slice(0,3)}</b><span>${d.short}</span>`;
   b.onclick=()=>{currentDay=i;switchView("workoutView");renderWorkout()}; $("#weekGrid").appendChild(b);
 });
 const js=new Date().getDay(),box=$("#todayCard");
 if(js===0||js===6) box.innerHTML=`<div class="today-card"><div><span class="pill">DESCANSO</span><h3>Recuperación</h3><p>Caminar suave está bien.</p></div><div style="font-size:32px">🌙</div></div>`;
 else{const d=ROUTINE[js-1];box.innerHTML=`<div class="today-card"><div><span class="pill">${d.short.toUpperCase()}</span><h3>${d.day}</h3><p>${d.focus}</p></div><button class="primary" id="todayGo">Entrenar</button></div>`;$("#todayGo").onclick=()=>{currentDay=js-1;switchView("workoutView");renderWorkout()}}
 const sets=hist.reduce((a,x)=>a+x.entries.filter(e=>e.done).length,0); const prs=calcPRs(hist);
 $("#homeWorkouts").textContent=hist.length;$("#homeSets").textContent=sets;$("#homePRs").textContent=Object.keys(prs).length;
 $("#streakDays").textContent=calcStreak(hist);
}
function calcStreak(h){if(!h.length)return 0;const ds=[...new Set(h.map(x=>new Date(x.date).toDateString()))].map(x=>new Date(x)).sort((a,b)=>b-a);let s=1;for(let i=1;i<ds.length;i++){if((ds[i-1]-ds[i])/86400000<=1.1)s++;else break}return s}
function renderWorkout(){
 const d=ROUTINE[currentDay];$("#workoutDay").textContent=d.day.toUpperCase();$("#workoutName").textContent=d.short;$("#workoutFocus").textContent=d.focus;
 const active=load("active",{});$("#exerciseList").innerHTML="";
 d.ex.forEach((e,ei)=>{
  const [name,scheme,rest,muscle,type]=e, n=setCount(scheme); let rows="";
  for(let s=1;s<=n;s++){const k=`${currentDay}-${ei}-${s}`,v=active[k]||{};rows+=`<div class="set-row"><span>${s}</span><input class="kg" data-k="${k}" type="number" inputmode="decimal" step=".5" placeholder="kg" value="${v.kg??""}"><input class="reps" data-k="${k}" type="number" inputmode="numeric" placeholder="reps" value="${v.reps??""}"><button class="done-set ${v.done?"done":""}" data-k="${k}" data-rest="${rest}">✓</button></div>`}
  const card=document.createElement("div");card.className="exercise";card.innerHTML=`<div class="exercise-top"><div class="exercise-art">${art(type)}</div><div><h3>${name}</h3><div class="meta">${muscle}</div><div class="meta">${scheme} · ${rest}</div><div class="meta">RIR 3</div></div><button class="info-btn" data-e="${ei}">i</button></div><div class="labels"><span>#</span><span>PESO</span><span>REPS</span><span>OK</span></div>${rows}`;
  $("#exerciseList").appendChild(card);
 });
 document.querySelectorAll(".kg,.reps").forEach(x=>x.oninput=saveActive);
 document.querySelectorAll(".done-set").forEach(x=>x.onclick=toggleSet);
 document.querySelectorAll(".info-btn").forEach(x=>x.onclick=()=>openInfo(parseInt(x.dataset.e)));
}
function saveActive(ev){let a=load("active",{}),k=ev.target.dataset.k;a[k]=a[k]||{};a[k][ev.target.classList.contains("kg")?"kg":"reps"]=ev.target.value;save("active",a)}
function restSecs(r){if(r.includes("2–3"))return 150;if(r.includes("2 min"))return 120;if(r.includes("90–120"))return 105;if(r.includes("60–90"))return 75;if(r.includes("90"))return 90;return 90}
function toggleSet(ev){let a=load("active",{}),k=ev.currentTarget.dataset.k;a[k]=a[k]||{};a[k].done=!a[k].done;save("active",a);ev.currentTarget.classList.toggle("done",a[k].done);if(a[k].done)startTimer(restSecs(ev.currentTarget.dataset.rest))}
function startTimer(s){clearInterval(timerInterval);timerSeconds=s;$("#timerBar").classList.remove("hidden");tick();timerInterval=setInterval(()=>{timerSeconds--;tick();if(timerSeconds<=0){clearInterval(timerInterval);navigator.vibrate?.([250,100,250])}},1000)}
function tick(){let s=Math.max(timerSeconds,0),m=Math.floor(s/60);$("#timerText").textContent=`${String(m).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
$("#minusTimer").onclick=()=>{timerSeconds=Math.max(0,timerSeconds-15);tick()};$("#plusTimer").onclick=()=>{timerSeconds+=15;tick()};$("#stopTimer").onclick=()=>{clearInterval(timerInterval);$("#timerBar").classList.add("hidden")};

$("#startWorkoutBtn").onclick=()=>{
 if(!workoutStarted){workoutStarted=true;save("start",new Date().toISOString());$("#startWorkoutBtn").textContent="Finalizar";return}
 const d=ROUTINE[currentDay],a=load("active",{}),entries=[];
 d.ex.forEach((e,ei)=>{for(let s=1;s<=setCount(e[1]);s++){const v=a[`${currentDay}-${ei}-${s}`];if(v&&(v.kg||v.reps||v.done))entries.push({exercise:e[0],set:s,kg:Number(v.kg||0),reps:Number(v.reps||0),done:!!v.done})}});
 const h=load("history",[]);h.unshift({date:new Date().toISOString(),day:d.day,name:d.short,entries});save("history",h);localStorage.removeItem("active");workoutStarted=false;$("#startWorkoutBtn").textContent="Empezar";renderWorkout();renderHome();renderProgress();alert("Entrenamiento guardado 💪");
};
function calcPRs(h){const p={};h.forEach(x=>x.entries.filter(e=>e.done).forEach(e=>{const score=e.kg*(1+e.reps/30);if(!p[e.exercise]||score>p[e.exercise].score)p[e.exercise]={kg:e.kg,reps:e.reps,score,date:x.date}}));return p}
function renderProgress(){
 const h=load("history",[]),w=load("weights",[]),prs=calcPRs(h),sets=h.reduce((a,x)=>a+x.entries.filter(e=>e.done).length,0);
 $("#statWorkouts").textContent=h.length;$("#statSets").textContent=sets;$("#statWeight").textContent=w.length?`${w[0].kg.toFixed(1)} kg`:"—";
 const pr=$("#prList");pr.innerHTML="";Object.entries(prs).slice(0,8).forEach(([n,v])=>{const d=document.createElement("div");d.className="panel pr";d.innerHTML=`<strong>${n}</strong><span class="pr-value">${v.kg} kg × ${v.reps}</span>`;pr.appendChild(d)});if(!Object.keys(prs).length)pr.innerHTML=`<div class="panel">Aún no hay récords registrados.</div>`;
 const hist=$("#historyList");hist.innerHTML="";h.slice(0,12).forEach(x=>{const d=document.createElement("div");d.className="panel history";d.innerHTML=`<strong>${x.day} · ${x.name}</strong><span>${new Date(x.date).toLocaleDateString("es-CR")} · ${x.entries.filter(e=>e.done).length} series</span>`;hist.appendChild(d)});if(!h.length)hist.innerHTML=`<div class="panel">Todavía no hay entrenamientos guardados.</div>`;drawChart(w)
}
$("#saveWeightBtn").onclick=()=>{const kg=parseFloat($("#bodyWeightInput").value);if(!kg)return;const w=load("weights",[]);w.unshift({date:new Date().toISOString(),kg});save("weights",w);$("#bodyWeightInput").value="";renderProgress();renderHome()}
function drawChart(data){const c=$("#weightChart"),ctx=c.getContext("2d"),W=c.width,H=c.height;ctx.clearRect(0,0,W,H);ctx.fillStyle="#121820";ctx.fillRect(0,0,W,H);if(!data.length){ctx.fillStyle="#94a2b0";ctx.font="25px sans-serif";ctx.fillText("Registra tu peso para ver la gráfica",35,165);return}const a=[...data].reverse().slice(-30),v=a.map(x=>x.kg),mn=Math.min(...v)-1,mx=Math.max(...v)+1;ctx.strokeStyle="#26313c";ctx.lineWidth=2;for(let i=1;i<5;i++){let y=H*i/5;ctx.beginPath();ctx.moveTo(40,y);ctx.lineTo(W-20,y);ctx.stroke()}ctx.strokeStyle="#54e596";ctx.lineWidth=5;ctx.beginPath();a.forEach((x,i)=>{let px=40+i*(W-70)/Math.max(1,a.length-1),py=H-35-(x.kg-mn)*(H-70)/(mx-mn);i?ctx.lineTo(px,py):ctx.moveTo(px,py)});ctx.stroke();ctx.fillStyle="#d7e1e8";ctx.font="22px sans-serif";ctx.fillText(`${v[v.length-1].toFixed(1)} kg`,50,34)}
function openInfo(ei){const e=ROUTINE[currentDay].ex[ei];$("#modalArt").innerHTML=art(e[4]);$("#modalMuscle").textContent=e[3].toUpperCase();$("#modalTitle").textContent=e[0];$("#modalMeta").textContent=`${e[1]} · Descanso ${e[2]}`;$("#modalTips").innerHTML=e[5].map(t=>`<div class="tip">✓ ${t}</div>`).join("");$("#exerciseModal").classList.remove("hidden")}
$("#closeModal").onclick=()=>$("#exerciseModal").classList.add("hidden");$("#exerciseModal").onclick=e=>{if(e.target.id==="exerciseModal")$("#exerciseModal").classList.add("hidden")}
function switchView(id){document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===id));document.querySelectorAll(".nav-btn").forEach(x=>x.classList.toggle("active",x.dataset.view===id));$("#pageTitle").textContent={homeView:"Inicio",workoutView:"Entrenamiento",progressView:"Progreso",settingsView:"Ajustes"}[id];if(id==="progressView")renderProgress()}
document.querySelectorAll(".nav-btn").forEach(x=>x.onclick=()=>switchView(x.dataset.view));
$("#clearDataBtn").onclick=()=>{if(confirm("¿Seguro que quieres borrar todos los registros?")){["history","weights","active","start"].forEach(k=>localStorage.removeItem(k));renderHome();renderProgress();alert("Registros borrados.")}}
renderHome();renderWorkout();renderProgress();if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js");
