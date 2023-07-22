<template>
  <!-- sidebar component, desktop -->
  <aside class="h-full hidden lg:flex lg:flex-shrink-0 overflow-x-hidden">
    <div
      :class="[
        !sidebarCollapsed ? 'w-64' : 'w-14',
        'flex flex-col overflow-x-hidden',
      ]"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0">
        <div class="px-4 bg-gray-900">
          <a
            href="#"
            class="inline-flex items-center h-16 flex-shrink-0 hover:opacity-80"
          >
            <svg
              class="h-6 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71 72"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M57.7.9H13.4C6 .9.1 6.9.1 14.2v44.3c0 7.4 6 13.3 13.3 13.3h44.3c7.4 0 13.3-6 13.3-13.3V14.3C71.1 6.9 65.1.9 57.7.9z"
                  fill="#3B81F6"
                  fill-rule="nonzero"
                />
                <path
                  d="M56.1 54.5c0 1.3-1.1 2.4-2.4 2.4h-8c-1.3 0-2.4-1.1-2.4-2.4v-3H27.7v3c0 1.3-1.1 2.4-2.4 2.4h-8c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h3V28.6h-3c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v3h15.6v-3c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v8c0 1.3-1.1 2.4-2.4 2.4h-3v15.6h3c1.3 0 2.4 1.1 2.4 2.4v7.9z"
                  fill="#FFF"
                />
                <path
                  d="M43.8 23.2H27.3c-2.7 0-5 2.2-5 5v16.5c0 2.7 2.2 5 5 5h16.5c2.7 0 5-2.2 5-5V28.1c0-2.7-2.3-4.9-5-4.9z"
                  fill="#3B81F6"
                />
                <g fill="#3B81F6" fill-rule="nonzero">
                  <path
                    d="M27.7 26.2v-3h-1.1c-2.4 0-4.3 1.9-4.3 4.3v1.1h3c1.4 0 2.4-1.1 2.4-2.4zM25.4 44.2h-3v1.1c0 2.4 1.9 4.3 4.3 4.3h1.1v-3c-.1-1.4-1.1-2.4-2.4-2.4zM43.3 46.6v3h1.1c2.4 0 4.3-1.9 4.3-4.3v-1.1h-3c-1.3 0-2.4 1-2.4 2.4zM45.7 28.6h3v-1.1c0-2.4-1.9-4.3-4.3-4.3h-1.1v3c0 1.3 1.1 2.4 2.4 2.4z"
                  />
                </g>
              </g>
            </svg>
            <svg
              class="h-5 ml-2 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 275 74"
              v-if="!sidebarCollapsed"
            >
              <g fill-rule="nonzero" fill="none">
                <path
                  d="M.6 1.6h34.3v11.9H14.6v16.8h16.1v12H14.6v18.5H35v12.1H.6V1.6zm54-.1h19.2L87.7 73H73.4l-2.9-16H56l-2.9 16h-13L54.6 1.5zm13.7 44l-4.7-28.1h-.3l-4.9 28.1h9.9zm23.1 7.9l13.2-.4c.4 4.4 1.4 9.5 6.4 9.5 4 0 5.2-3.4 5.2-6.6 0-3.9-2.5-6.8-6.6-10.7l-6.8-6.7c-6.4-6-10.3-11.9-10.3-19.7C92.5 8.9 98.7.4 111.4.4c8.9 0 17.2 4.6 17.8 20.2l-12.4.4c-.5-5.2-1.7-9.3-6.1-9.3-3.5 0-5.1 2.7-5.1 6 0 3.8 3.9 7.4 7.3 10.6l6.3 6.2c6.9 6.6 10.8 12.7 10.8 20.7 0 10.5-7.2 18.8-19.1 18.8-11.9 0-18.8-7.9-19.5-20.6zm55.5-8.6L132 1.6h15l7.9 26.7 7.6-26.7H176l-14.9 43.3v28h-14.2V44.8z"
                  fill="#FFF"
                />
                <path
                  d="M180.9 1.6h18l7.7 28.4h.3l8-28.4h17.2V73h-12.5V22.8h-.2l-8 30.4h-9.7l-8.2-30.3h-.2v50h-12.4V1.6zm59.7 0h34.3v11.9h-20.3v16.8h16.1v12h-16.1v18.5H275v12.1h-34.4V1.6z"
                  fill="#3B81F6"
                />
              </g>
            </svg>
          </a>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav
            class="flex-1 px-2 py-2 bg-gray-800 space-y-1 overflow-x-hidden pb-12"
          >
            <div
              class="flex-shrink-0 pl-2 flex py-2 px-2 mt-0.5 text-sm font-medium rounded-md hover:bg-gray-700 relative"
              :key="item.name"
              v-for="item in currentCompany"
            >
              <a class="absolute inset-0" href="#"
                ><span class="sr-only">Home</span></a
              >
              <component
                :is="item.icon"
                :class="['text-gray-400 mr-3 flex-shrink-0 h-6 w-6 mb-3']"
                aria-hidden="true"
                v-on:click="sidebarCollapsed = false"
              />
              <div
                class="flex flex-col overflow-x-hidden"
                v-if="!sidebarCollapsed"
              >
                <span
                  class="block text-sm font-medium text-gray-200 truncate"
                  >{{ item.name }}</span
                >
                <a
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative block items-center text-xs text-blue-500 hover:text-blue-600 underline truncate"
                >
                  {{ item.domain }}
                </a>
              </div>
            </div>

            <a
              v-for="item in primaryNavigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-700 text-white hover:text-white focus:text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md focus:text-gray-300',
              ]"
            >
              <span class="flex items-center">
                <component
                  :is="item.icon"
                  :class="[
                    item.current
                      ? 'text-gray-300'
                      : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6',
                  ]"
                  aria-hidden="true"
                />
                <span v-if="!sidebarCollapsed">{{ item.name }}</span>
              </span>
              <span
                v-if="item.hasBadge"
                class="bg-blue-500 group-hover:bg-blue-600 text-white ml-3 inline-block py-0.5 px-3 text-xs font-semibold rounded-full"
                x-state:on="Current"
                x-state:off="Default"
                x-state-description='Current: "bg-gray-800", Default: "bg-gray-900 group-hover:bg-gray-800"'
              >
                {{ item.badgeCount }}
              </span>
            </a>

            <div
              class="rounded"
              :class="[subNavigationOpen ? 'bg-gray-700' : '']"
            >
              <button
                type="button"
                v-on:click="subNavigationOpen = !subNavigationOpen"
                class="w-full text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md focus:text-gray-300"
              >
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span v-if="!sidebarCollapsed">Submenu</span>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    :class="[subNavigationOpen ? 'rotate-180' : '']"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <div
                v-if="subNavigationOpen"
                class="space-y-1"
                :class="[
                  subNavigationOpen ? '' : '',
                  'border-t border-gray-800',
                  subNavigationOpen && !sidebarCollapsed ? 'p-2' : '',
                ]"
              >
                <a
                  href="#"
                  class="w-full text-gray-300 hover:bg-gray-600 hover:text-white group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md focus:text-gray-300"
                >
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="text-gray-400 group-hover:text-white´ mr-3 flex-shrink-0 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span v-if="!sidebarCollapsed">Submenu Item</span>
                  </span>
                </a>
                <a
                  href="#"
                  class="w-full text-gray-300 bg-gray-600 hover:bg-gray-600 hover:text-white group flex items-center justify-between rounded px-2 py-2 text-sm font-medium focus:text-gray-300"
                >
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="text-gray-300 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span v-if="!sidebarCollapsed">Submenu Item</span>
                  </span>
                </a>
                <a
                  href="#"
                  class="w-full text-gray-300 hover:bg-gray-600 hover:text-white group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md focus:text-gray-300"
                >
                  <span class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span v-if="!sidebarCollapsed">Submenu Item</span>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <hr
                class="border-t border-gray-700 my-5 -mx-2"
                aria-hidden="true"
              />
            </div>

            <a
              v-for="item in secondaryNavigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md focus:text-gray-300',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              <span v-if="!sidebarCollapsed">{{ item.name }}</span>
            </a>

            <button
              type="button"
              class="fixed border-t border-gray-700 left-0 bottom-0 bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white group items-center pl-4 pr-2 py-2 text-sm font-medium hidden lg:flex"
              v-on:click="sidebarCollapsed = !sidebarCollapsed"
              as="template"
              :style="[
                sidebarCollapsed ? { width: 'auto' } : { width: '256px' },
              ]"
            >
              <ArrowCircleLeftIcon
                class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                aria-hidden="true"
                v-if="!sidebarCollapsed"
              />

              <ArrowCircleRightIcon
                aria-hidden="true"
                v-if="sidebarCollapsed"
                :class="[
                  sidebarCollapsed ? 'mr-2' : 'mr-3',
                  'text-gray-400 group-hover:text-gray-300 flex-shrink-0 h-6 w-6',
                ]"
              />

              <span v-if="!sidebarCollapsed">Minimer menu</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </aside>
  <!-- /end sidebar component, desktop -->
</template>


<script>
import { ref } from "vue";

import { Menu } from "@headlessui/vue";

import {
  CalendarIcon,
  HomeIcon,
  CogIcon,
  InboxIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  GlobeAltIcon,
  ClipboardListIcon,
  TruckIcon,
  RefreshIcon,
  GiftIcon,
  ChartSquareBarIcon,
  CameraIcon,
  CloudDownloadIcon,
  CreditCardIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/vue/outline";

const currentCompany = [
  {
    name: "Mikkel Tschentscher Staging ApS",
    icon: HomeIcon,
    domain: "mikkeltschentscher.easyme.staging.dk",
    href: "#",
  },
];

const primaryNavigation = [
  { name: "Kalender", href: "#", icon: CalendarIcon, current: true },
  {
    name: "Ydelser",
    href: "#",
    icon: ClipboardListIcon,
    current: false,
    hasBadge: true,
    badgeCount: 3,
  },
  { name: "Website", href: "#", icon: GlobeAltIcon, current: false },
  { name: "Klienter", href: "#", icon: UserIcon, current: false },
  { name: "Arrangementer", href: "#", icon: UserGroupIcon, current: false },
  { name: "Klippekort", href: "#", icon: GiftIcon, current: false },
  { name: "Abonnementer", href: "#", icon: RefreshIcon, current: false },
  { name: "Produkter", href: "#", icon: TruckIcon, current: false },
  { name: "Statistik", href: "#", icon: ChartSquareBarIcon, current: false },
];

const secondaryNavigation = [
  { name: "Mailmotor", href: "#", icon: InboxIcon, current: false },
  { name: "Download", href: "#", icon: CloudDownloadIcon, current: false },
  { name: "Fakturaer", href: "#", icon: CreditCardIcon, current: false },
];

export default {
  components: {
    Menu,
    InboxIcon,
    CogIcon,
    CameraIcon,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
  },
  setup() {
    const sidebarCollapsed = ref(false);
    const subNavigationOpen = ref(false);
    return {
      currentCompany,
      primaryNavigation,
      secondaryNavigation,
      sidebarCollapsed,
      subNavigationOpen,
    };
  },
};
</script>