
import React, { useState } from 'react';
import { 
  MapPin, Utensils, ShoppingBag, Train, BedDouble, 
  Plane, Wallet, Info, ChevronRight, Sparkles, 
  Calendar, Phone, ExternalLink,
  LogOut, Clock, BookOpen, Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ITINERARY_DATA, HOTEL_DATA, FLIGHT_DATA } from './data';
import type { DayItinerary, ItineraryItem } from './types';
import { EventType } from './types';

// --- Helper Components ---

interface TagProps {
  children: React.ReactNode;
  color: 'red' | 'blue' | 'gray' | 'green' | 'amber';
}

const Tag: React.FC<TagProps> = ({ children, color }) => {
  const colors = {
    red: 'bg-red-50 text-red-700 border-red-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    gray: 'bg-stone-100 text-stone-600 border-stone-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${colors[color]} font-medium mr-1 mb-1 inline-block`}>
      {children}
    </span>
  );
};

// --- Main Components ---

interface EventCardProps {
  item: ItineraryItem;
  dayDate: string;
}

const EventCard: React.FC<EventCardProps> = ({ item, dayDate }) => {
  const [expanded, setExpanded] = useState(false);
  
  const renderIcon = (className: string) => {
    switch (item.type) {
      case EventType.FOOD: return <Utensils className={className} />;
      case EventType.SHOPPING: return <ShoppingBag className={className} />;
      case EventType.TRANSPORT: return <Train className={className} />;
      case EventType.HOTEL: return <BedDouble className={className} />;
      case EventType.FLIGHT: return <Plane className={className} />;
      case EventType.ACTIVITY: return <Sparkles className={className} />;
      default: return <MapPin className={className} />;
    }
  };

  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location || item.title)}`;
  const insight = item.aiInsights;

  return (
    <motion.div 
      layout
      onClick={() => setExpanded(!expanded)}
      className={`bg-white rounded-xl p-4 shadow-sm border border-stone-100 mb-3 overflow-hidden transition-all ${expanded ? 'ring-2 ring-indigo-50' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 w-full">
          {/* Time Column */}
          <div className="flex flex-col items-center gap-1 min-w-[48px]">
            <span className="text-sm font-bold text-stone-800 font-mono">{item.time}</span>
            <div className={`p-2 rounded-full ${expanded ? 'bg-stone-800 text-white' : 'bg-stone-50'}`}>
              {renderIcon(expanded ? "w-4 h-4 text-white" : "w-4 h-4 text-emerald-500")}
            </div>
          </div>

          {/* Header Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-stone-800 leading-tight truncate pr-2">{item.title}</h3>
            
            {item.location && (
              <a 
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-stone-500 mt-1 flex items-center gap-1 hover:text-blue-600 hover:underline active:text-blue-800 transition-colors group w-fit"
              >
                <MapPin size={10} className="shrink-0"/> 
                <span className="truncate max-w-[200px]">{item.location}</span>
                <ExternalLink size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
            
            <div className="flex flex-wrap mt-2">
              {item.type === EventType.FOOD && <Tag color="red">必吃</Tag>}
              {item.reservationCode && <Tag color="green">已預約</Tag>}
              {item.transportInfo && <Tag color="blue">交通</Tag>}
            </div>

            {/* Suggested Leave Time Indicator (Collapsed Only) */}
            {item.suggestedLeaveTime && !expanded && (
               <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded w-fit border border-amber-100/50">
                  <LogOut size={10} />
                  <span>建議 {item.suggestedLeaveTime} 離開</span>
               </div>
            )}
          </div>
        </div>

        <ChevronRight size={16} className={`text-stone-300 transition-transform mt-1 shrink-0 ${expanded ? 'rotate-90' : ''}`} />
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-stone-100 ml-0 md:ml-[60px]"
          >
            {/* 1. Schedule & Basic Info */}
            {item.suggestedLeaveTime && (
               <div className="flex items-center gap-2 text-sm text-amber-800 font-bold mb-4 bg-amber-50 p-2.5 rounded-lg border border-amber-100">
                  <Clock size={16} className="text-amber-600"/>
                  <span>請控制時間，建議於 {item.suggestedLeaveTime} 前離開</span>
               </div>
            )}

            <div className="text-sm text-stone-600 mb-4 whitespace-pre-line leading-relaxed">
                {item.description}
            </div>

            {/* 2. Public Transport Detail Block */}
            {item.transportInfo && (
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 mb-4">
                <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                   <Train size={12} /> 交通詳情
                </h4>
                <div className="text-sm text-blue-900 font-medium whitespace-pre-line leading-relaxed pl-1 border-l-2 border-blue-200">
                    {item.transportInfo}
                </div>
              </div>
            )}

            {/* 3. AI Insights / Static Guide Content */}
            {insight && (
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 space-y-4">
                {/* Story */}
                {insight.story && (
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                       <BookOpen size={12} /> 關於這裡
                    </h4>
                    <p className="text-sm text-stone-700 italic leading-relaxed">
                      {insight.story}
                    </p>
                  </div>
                )}

                {/* Recommendations Grid */}
                <div className="grid grid-cols-1 gap-3">
                    {/* Food */}
                    {(insight.mustEat && insight.mustEat.length > 0) && (
                    <div>
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <Utensils size={12} /> 必吃推薦
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                        {insight.mustEat.map((f, i) => <Tag key={i} color="red">{f}</Tag>)}
                        </div>
                    </div>
                    )}

                    {/* Shopping */}
                    {(insight.mustBuy && insight.mustBuy.length > 0) && (
                    <div>
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <ShoppingBag size={12} /> 必買伴手禮
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                        {insight.mustBuy.map((b, i) => <Tag key={i} color="blue">{b}</Tag>)}
                        </div>
                    </div>
                    )}
                </div>
                
                {/* Tips */}
                {(insight.tips && insight.tips.length > 0) && (
                    <div className="pt-2 border-t border-stone-200/50">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Lightbulb size={12} /> 攻略貼士
                        </h4>
                        <ul className="space-y-1.5">
                            {insight.tips.map((tip, i) => (
                                <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                                    <span className="text-stone-300 mt-0.5">•</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DayView = ({ day }: { day: DayItinerary }) => {
  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto">
      <div className="mb-6 sticky top-0 bg-[#f5f5f4] z-10 py-2 border-b border-stone-200/50 backdrop-blur-sm">
        <div className="flex items-end justify-between mb-2">
            <div>
            <h1 className="text-3xl font-bold text-stone-800">{day.date}</h1>
            <p className="text-stone-500 font-medium flex items-center gap-2">
                {day.dayOfWeek} · {day.title}
            </p>
            </div>
        </div>
        
        {day.hotelLeaveTime && (
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-2 rounded-lg border border-indigo-100 shadow-sm">
                <LogOut size={12} />
                建議今日 {day.hotelLeaveTime} 從酒店出發
            </div>
        )}
      </div>
      
      <div className="relative">
         {/* Timeline Line */}
         <div className="absolute left-[23px] top-4 bottom-0 w-0.5 bg-stone-200 z-0"></div>
         
         {/* Events */}
         <div className="relative z-10">
            {day.items.map(item => (
                <EventCard key={item.id} item={item} dayDate={day.date} />
            ))}
         </div>
      </div>
    </div>
  );
};

const ToolsView = () => {
    // Budget State
    const [budgetItems, setBudgetItems] = useState<{item: string, price: number}[]>([]);
    const [newItem, setNewItem] = useState("");
    const [newPrice, setNewPrice] = useState("");
    
    // Independent Transport Reserve State
    const [transportTotal, setTransportTotal] = useState(0);
    const [transportInput, setTransportInput] = useState("");

    const addBudget = () => {
        if(newItem && newPrice) {
            setBudgetItems([...budgetItems, {item: newItem, price: parseInt(newPrice)}]);
            setNewItem("");
            setNewPrice("");
        }
    }

    const addTransport = () => {
        const val = parseInt(transportInput);
        if (!isNaN(val)) {
            setTransportTotal(prev => prev + val);
            setTransportInput("");
        }
    }

    const total = budgetItems.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div className="pb-24 pt-6 px-4 max-w-md mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stone-800 mb-4">旅行工具箱</h1>
            
            {/* Flight Card */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-sky-50 rounded-bl-full -mr-2 -mt-2"></div>
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2 mb-3 relative z-10">
                    <Plane className="text-sky-600" size={20} /> 航班資訊
                </h3>
                {FLIGHT_DATA.map(f => (
                    <div key={f.code} className="mb-3 last:mb-0 border-b last:border-0 border-stone-50 pb-2 last:pb-0 relative z-10">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">{f.type === 'DEPARTURE' ? '去程' : '回程'}</span>
                            <span className="font-mono font-bold text-stone-800">{f.code}</span>
                        </div>
                        <div className="flex justify-between text-sm text-stone-600">
                            <span>{f.date}</span>
                            <span>{f.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hotel Card */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-full -mr-2 -mt-2"></div>
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2 mb-3 relative z-10">
                    <BedDouble className="text-indigo-600" size={20} /> 住宿資訊
                </h3>
                <div className="relative z-10">
                    <p className="font-bold text-stone-800 mb-1">{HOTEL_DATA.name}</p>
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_DATA.name + " " + HOTEL_DATA.address)}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-sm text-stone-500 mb-2 flex items-center gap-1 hover:text-blue-600"
                    >
                        <MapPin size={12}/> {HOTEL_DATA.address}
                    </a>
                    <div className="flex gap-4 text-xs text-stone-600 font-medium bg-stone-50 p-2 rounded-lg">
                        <span>IN: {HOTEL_DATA.checkIn}</span>
                        <span>OUT: {HOTEL_DATA.checkOut}</span>
                    </div>
                    <a href={`tel:${HOTEL_DATA.phone}`} className="mt-3 flex items-center justify-center gap-2 w-full py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold active:scale-95 transition-transform">
                        <Phone size={14} /> 致電酒店
                    </a>
                </div>
            </div>

             {/* Emergency Card */}
             <div className="bg-red-50 rounded-xl shadow-sm border border-red-100 p-5">
                <h3 className="text-lg font-bold text-red-800 flex items-center gap-2 mb-3">
                    <Info className="text-red-600" size={20} /> 緊急聯絡
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-2 rounded border border-red-100">
                        <span className="text-xs text-red-400 block">報警</span>
                        <span className="font-bold text-red-700 text-lg">110</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-red-100">
                        <span className="text-xs text-red-400 block">救護車</span>
                        <span className="font-bold text-red-700 text-lg">119</span>
                    </div>
                </div>
            </div>

            {/* Transport Reserve Card (New Independent Item) */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2 mb-3">
                    <Train className="text-blue-600" size={20} /> 交通儲備
                </h3>
                <div className="flex justify-between items-baseline mb-4">
                    <span className="text-sm text-stone-500">目前累積 (IC卡/車票)</span>
                    <span className="text-2xl font-bold text-stone-800 font-mono">¥{transportTotal.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                    <input 
                        type="number" 
                        placeholder="儲值金額" 
                        value={transportInput}
                        onChange={e => setTransportInput(e.target.value)}
                        className="flex-1 bg-stone-50 border border-stone-200 rounded px-2 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        onClick={addTransport}
                        className="bg-blue-600 text-white px-4 rounded font-bold text-sm active:scale-95 transition-transform"
                    >
                        新增
                    </button>
                </div>
            </div>

            {/* Simple Budget Tool (General) */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2 mb-3">
                    <Wallet className="text-emerald-600" size={20} /> 簡易記帳
                </h3>
                {budgetItems.length > 0 ? (
                    <div className="bg-stone-50 rounded-lg p-3 max-h-40 overflow-y-auto mb-3 space-y-2">
                        {budgetItems.map((b, idx) => (
                            <div key={idx} className="flex justify-between text-sm text-stone-600 border-b border-stone-200 pb-1 last:border-0">
                                <span>{b.item}</span>
                                <span className="font-mono">¥{b.price.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-4 text-xs text-stone-400 bg-stone-50 rounded-lg mb-3">
                        暫無記帳項目
                    </div>
                )}
                
                <div className="flex justify-between items-center mb-3 pt-2 border-t border-stone-100">
                    <span className="font-bold text-stone-500">總計</span>
                    <span className="font-bold text-xl text-stone-800">¥{total.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="項目" 
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        className="flex-1 bg-stone-50 border border-stone-200 rounded px-2 py-2 text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <input 
                        type="number" 
                        placeholder="金額" 
                        value={newPrice}
                        onChange={e => setNewPrice(e.target.value)}
                        className="w-20 bg-stone-50 border border-stone-200 rounded px-2 py-2 text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <button 
                        onClick={addBudget}
                        className="bg-stone-800 text-white px-4 rounded font-bold text-sm active:scale-95 transition-transform"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'tools'>('itinerary');
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-stone-800 font-sans pb-20">
      {activeTab === 'itinerary' && (
        <>
            {/* Day Selector Sticky Header */}
            <div className="sticky top-0 z-20 bg-[#f5f5f4]/95 backdrop-blur border-b border-stone-200 overflow-x-auto no-scrollbar">
                <div className="flex px-4 py-3 gap-3 w-max">
                    {ITINERARY_DATA.map((day, idx) => (
                        <button
                            key={day.id}
                            onClick={() => setCurrentDayIndex(idx)}
                            className={`flex flex-col items-center min-w-[60px] px-3 py-2 rounded-xl transition-all ${
                                currentDayIndex === idx 
                                ? 'bg-stone-800 text-white shadow-md scale-105' 
                                : 'bg-white text-stone-400 border border-stone-100'
                            }`}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-wider">{day.dayOfWeek}</span>
                            <span className="text-lg font-bold leading-none">{day.date.split('/')[1]}</span>
                        </button>
                    ))}
                </div>
            </div>

            <DayView day={ITINERARY_DATA[currentDayIndex]} />
        </>
      )}

      {activeTab === 'tools' && <ToolsView />}

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-stone-200 shadow-xl rounded-full px-6 py-3 flex items-center gap-8 z-50">
        <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'itinerary' ? 'text-stone-800' : 'text-stone-400'}`}
        >
            <Calendar size={20} strokeWidth={activeTab === 'itinerary' ? 2.5 : 2} />
            <span className="text-[10px] font-bold">行程</span>
        </button>
        <div className="w-px h-8 bg-stone-200"></div>
        <button 
            onClick={() => setActiveTab('tools')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'tools' ? 'text-stone-800' : 'text-stone-400'}`}
        >
            <Wallet size={20} strokeWidth={activeTab === 'tools' ? 2.5 : 2} />
            <span className="text-[10px] font-bold">工具</span>
        </button>
      </div>
    </div>
  );
}
