<template>
  <!-- topbar component + mobile sidebar -->
  <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="aside"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <a href="#" class="inline-block hover:opacity-80">
                <svg
                  class="h-6 w-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 374 74"
                >
                  <path
                    fill="#fff"
                    d="M99.6 1.6h34.3v11.9h-20.3v16.8h16.1v12h-16.1v18.5H134v12.1H99.6V1.6zm54-.1h19.2L186.7 73h-14.3l-2.9-16H155l-2.9 16h-13l14.5-71.5zm13.7 44l-4.7-28.1h-.3l-4.9 28.1h9.9zm23.1 7.9l13.2-.4c.4 4.4 1.4 9.5 6.4 9.5 4 0 5.2-3.4 5.2-6.6 0-3.9-2.5-6.8-6.6-10.7l-6.8-6.7c-6.4-6-10.3-11.9-10.3-19.7 0-9.9 6.2-18.4 18.9-18.4 8.9 0 17.2 4.6 17.8 20.2l-12.4.4c-.5-5.2-1.7-9.3-6.1-9.3-3.5 0-5.1 2.7-5.1 6 0 3.8 3.9 7.4 7.3 10.6l6.3 6.2c6.9 6.6 10.8 12.7 10.8 20.7 0 10.5-7.2 18.8-19.1 18.8-11.9 0-18.8-7.9-19.5-20.6zm55.5-8.6L231 1.6h15l7.9 26.7 7.6-26.7H275l-14.9 43.3v28h-14.2V44.8zM27.7 27.2v-3h-1.1c-2.4 0-4.3 1.9-4.3 4.3v1.1h3c1.4 0 2.4-1.1 2.4-2.4zm-2.3 18h-3v1.1c0 2.4 1.9 4.3 4.3 4.3h1.1v-3c-.1-1.4-1.1-2.4-2.4-2.4zm17.9 2.4v3h1.1c2.4 0 4.3-1.9 4.3-4.3v-1.1h-3c-1.3 0-2.4 1-2.4 2.4zm2.4-18h3v-1.1c0-2.4-1.9-4.3-4.3-4.3h-1.1v3c0 1.3 1.1 2.4 2.4 2.4z"
                  />
                  <path
                    fill="#3B81F6"
                    d="M57.7 1.9H13.4C6 1.9.1 7.9.1 15.2v44.3c0 7.4 6 13.3 13.3 13.3h44.3c7.4 0 13.3-6 13.3-13.3V15.3c.1-7.4-5.9-13.4-13.3-13.4zM279.9 1.6h18l7.7 28.4h.3l8-28.4h17.2V73h-12.5V22.8h-.2l-8 30.4h-9.7l-8.2-30.3h-.2v50h-12.4V1.6zm59.7 0h34.3v11.9h-20.3v16.8h16.1v12h-16.1v18.5H374v12.1h-34.4z"
                  />
                  <path
                    fill="#fff"
                    d="M56.1 55.5c0 1.3-1.1 2.4-2.4 2.4h-8c-1.3 0-2.4-1.1-2.4-2.4v-3H27.7v3c0 1.3-1.1 2.4-2.4 2.4h-8c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h3V29.6h-3c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v3h15.6v-3c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v8c0 1.3-1.1 2.4-2.4 2.4h-3v15.6h3c1.3 0 2.4 1.1 2.4 2.4v7.9z"
                  />
                  <path
                    fill="#3B81F6"
                    d="M43.8 24.2H27.3c-2.7 0-5 2.2-5 5v16.5c0 2.7 2.2 5 5 5h16.5c2.7 0 5-2.2 5-5V29.1c0-2.7-2.3-4.9-5-4.9z"
                  />
                </svg>
              </a>
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <div
                  class="flex-shrink-0 pl-2 flex py-3 px-2 text-sm font-medium rounded-md hover:bg-gray-700 relative"
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
                  />
                  <div class="flex flex-col">
                    <span
                      class="block text-sm font-medium text-gray-200 truncate"
                      >{{ item.name }}</span
                    >
                    <a
                      :href="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center text-xs text-blue-500 hover:text-blue-600 underline truncate"
                    >
                      {{ item.domain }}
                    </a>
                  </div>
                </div>

                <div>
                  <hr
                    class="border-t border-gray-700 mt-3 mb-5 -mx-2"
                    aria-hidden="true"
                  />
                </div>

                <a
                  v-for="item in primaryNavigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-700 text-white hover:text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center justify-between px-2 py-2 text-base focus:text-gray-300 font-medium rounded-md',
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
                    {{ item.name }}
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
                    class="w-full text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center justify-between px-2 py-2 text-base font-medium rounded-md focus:text-gray-300"
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
                    :class="[
                      subNavigationOpen ? '' : '',
                      'border-t border-gray-800',
                    ]"
                  >
                    <a
                      href="#"
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
                        <span v-if="!sidebarCollapsed">Submenu Item</span>
                      </span>
                    </a>
                    <a
                      href="#"
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
                      ? 'bg-gray-700 text-white focus:text-white'
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
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>
    <button
      type="button"
      class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
      @click="sidebarOpen = true"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex">
        <div class="flex-shrink-0 flex items-center lg:hidden">
          <a href="#" class="inline-block hover:opacity-80">
            <svg
              class="h-5 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 374 74"
            >
              <path
                fill="#111827"
                d="M99.6 1.6h34.3v11.9h-20.3v16.8h16.1v12h-16.1v18.5H134v12.1H99.6V1.6zm54-.1h19.2L186.7 73h-14.3l-2.9-16H155l-2.9 16h-13l14.5-71.5zm13.7 44l-4.7-28.1h-.3l-4.9 28.1h9.9zm23.1 7.9l13.2-.4c.4 4.4 1.4 9.5 6.4 9.5 4 0 5.2-3.4 5.2-6.6 0-3.9-2.5-6.8-6.6-10.7l-6.8-6.7c-6.4-6-10.3-11.9-10.3-19.7 0-9.9 6.2-18.4 18.9-18.4 8.9 0 17.2 4.6 17.8 20.2l-12.4.4c-.5-5.2-1.7-9.3-6.1-9.3-3.5 0-5.1 2.7-5.1 6 0 3.8 3.9 7.4 7.3 10.6l6.3 6.2c6.9 6.6 10.8 12.7 10.8 20.7 0 10.5-7.2 18.8-19.1 18.8-11.9 0-18.8-7.9-19.5-20.6zm55.5-8.6L231 1.6h15l7.9 26.7 7.6-26.7H275l-14.9 43.3v28h-14.2V44.8zM27.7 27.2v-3h-1.1c-2.4 0-4.3 1.9-4.3 4.3v1.1h3c1.4 0 2.4-1.1 2.4-2.4zm-2.3 18h-3v1.1c0 2.4 1.9 4.3 4.3 4.3h1.1v-3c-.1-1.4-1.1-2.4-2.4-2.4zm17.9 2.4v3h1.1c2.4 0 4.3-1.9 4.3-4.3v-1.1h-3c-1.3 0-2.4 1-2.4 2.4zm2.4-18h3v-1.1c0-2.4-1.9-4.3-4.3-4.3h-1.1v3c0 1.3 1.1 2.4 2.4 2.4z"
              />
              <path
                fill="#3B81F6"
                d="M57.7 1.9H13.4C6 1.9.1 7.9.1 15.2v44.3c0 7.4 6 13.3 13.3 13.3h44.3c7.4 0 13.3-6 13.3-13.3V15.3c.1-7.4-5.9-13.4-13.3-13.4zM279.9 1.6h18l7.7 28.4h.3l8-28.4h17.2V73h-12.5V22.8h-.2l-8 30.4h-9.7l-8.2-30.3h-.2v50h-12.4V1.6zm59.7 0h34.3v11.9h-20.3v16.8h16.1v12h-16.1v18.5H374v12.1h-34.4z"
              />
              <path
                fill="#fff"
                d="M56.1 55.5c0 1.3-1.1 2.4-2.4 2.4h-8c-1.3 0-2.4-1.1-2.4-2.4v-3H27.7v3c0 1.3-1.1 2.4-2.4 2.4h-8c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h3V29.6h-3c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v3h15.6v-3c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v8c0 1.3-1.1 2.4-2.4 2.4h-3v15.6h3c1.3 0 2.4 1.1 2.4 2.4v7.9z"
              />
              <path
                fill="#3B81F6"
                d="M43.8 24.2H27.3c-2.7 0-5 2.2-5 5v16.5c0 2.7 2.2 5 5 5h16.5c2.7 0 5-2.2 5-5V29.1c0-2.7-2.3-4.9-5-4.9z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="flex items-center lg:ml-6">
        <div class="relative ml-2">
          <a
            href="#"
            class="group max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
          >
            <InboxIcon class="h-6 w-6 text-gray-500" aria-hidden="true" />
            <span class="hidden ml-2 text-gray-700 text-sm font-medium lg:block"
              >Indbakke</span
            >
            <span
              class="bg-blue-500 group-hover:bg-blue-600 text-white hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium lg:inline-block"
              x-state-description='undefined: "bg-purple-100 text-purple-600", undefined: "bg-gray-100 text-gray-900"'
              >100+</span
            >
          </a>
        </div>

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
            >
              <CogIcon class="h-6 w-6 text-gray-500" aria-hidden="true" />
              <span
                class="hidden ml-2 text-gray-700 text-sm font-medium lg:block"
                ><span class="sr-only">Open menu </span>Indstillinger</span
              >
              <ChevronDownIcon
                class="hidden flex-shrink-0 ml-1 h-5 w-4 text-gray-400 lg:block"
                aria-hidden="true"
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-2 w-56 lg:w-80 px-4 py-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="grid lg:grid-cols-2">
                <div class="col-span-1">
                  <p
                    class="uppercase text-xs text-gray-900 font-bold px-4 lg:pt-0 pb-2"
                  >
                    Sektion
                  </p>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                        'block px-4 py-2 text-sm rounded-md',
                      ]"
                      >Menupunkt 1</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded-md',
                      ]"
                      >Menupunkt 2</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded-md',
                      ]"
                      >Menupunkt 3</a
                    >
                  </MenuItem>
                </div>
                <div class="col-span-1">
                  <p
                    class="uppercase text-xs text-gray-900 font-bold px-4 lg:pt-0 pb-2"
                  >
                    Sektion
                  </p>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded-md',
                      ]"
                      >Menupunkt 4</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded-md',
                      ]"
                      >Menupunkt 5</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded-md',
                      ]"
                      >Menupunkt 6</a
                    >
                  </MenuItem>
                </div>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
            >
              <UserCircleIcon
                class="h-6 w-6 text-gray-500"
                aria-hidden="true"
              />
              <span
                class="hidden ml-2 text-gray-700 text-sm font-medium lg:block"
                ><span class="sr-only">Open user menu for </span>Mikkel
                Tschentscher</span
              >
              <ChevronDownIcon
                class="hidden flex-shrink-0 ml-1 h-5 w-4 text-gray-400 lg:block"
                aria-hidden="true"
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Din profil</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Din konto</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Log ud</a
                  >
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm truncate',
                    ]"
                  >
                    heypeople.easyme.dk
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm truncate',
                    ]"
                  >
                    sissefindnielsen.easyme.dk
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm truncate',
                    ]"
                  >
                    mikkeltschentscher.easyme.dk
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <button
          type="button"
          class="inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative ml-3"
        >
          <CameraIcon class="h-5 w-5" aria-hidden="true" />
          <span class="hidden sm:inline pl-2"
            >Scan
            <span class="hidden pl-0.5 xl:inline">Sygesikringskort</span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <!-- /end topbar component + mobile sidebar -->
</template>

<script>
import { ref } from "vue";

import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import {
  CalendarIcon,
  HomeIcon,
  CogIcon,
  ChevronDownIcon,
  InboxIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  MenuAlt2Icon,
  UserCircleIcon,
  XIcon,
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
    name: "Mikkel Tschentscher ApS",
    icon: HomeIcon,
    domain: "mikkeltschentscher.easyme.dk",
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
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    InboxIcon,
    UserCircleIcon,
    CogIcon,
    CameraIcon,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    ChevronDownIcon,
    MenuAlt2Icon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false);
    const subNavigationOpen = ref(false);

    return {
      currentCompany,
      primaryNavigation,
      secondaryNavigation,
      sidebarOpen,
      subNavigationOpen,
    };
  },
};
</script>